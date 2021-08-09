import React, { useState, useEffect, useCallback, Fragment } from 'react';

import classes from './App.module.css';

import logo from './assets/logo/logo-option-2.png';
import qrCode from './assets/logo/qr-code_4.png';

import Card from './components/UI/Card';
import ParkingCard from './components/ParkingInfoComponents/ParkingCard'
import ParkingTiming from './components/ParkingInfoComponents/ParkingTiming/ParkingTiming';
import ParkingMap from './components/ParkingInfoComponents/ParkingMap';
import Modal from './components/UI/Modal';

const url = '/api/monitor/data';
const urlLocal = 'http://localhost:3010/monitor/data';

const App = () => {
  

  const [parkingInfoState, setParkingInfoState] = useState([]);
  const [lastDetectionState, setlastDetectionState] = useState(null);
  const [isError, setIsError ] = useState(false);

  const fetchData = useCallback(async () => {
    try{

      setIsError(false);
      const response = await fetch(urlLocal);

      if(response.status !== 200) {
        throw new Error();
      }
      const data = await response.json();
      const { parkingLots } = data; //updated data
      // console.log(parkingLots)

      setlastDetectionState(data.lastDetection);

      setParkingInfoState(() => {
        return parkingLots;        
      });
      
    }
    catch(e){
      setIsError(true);
      console.log(e);
    }
  }, []);

  useEffect(() => {
   if(!isError) {
     const fetchInt = setInterval(() => {
       fetchData(); 
     }, 5000);
     return () => clearInterval(fetchInt);
   }
  }, [fetchData, isError]);
  
  return (
    <Fragment>
      {isError && <Modal>oops! Error while fetching data</Modal>}
      <header className={classes.header}>
        <img className={classes["header__logo"]} src={logo} height={210} alt={logo} />
        <img className={classes["header__qr"]} src={qrCode} alt="qr-code" />
      </header>
      <div className={classes['header__main']}>
        
        <Card>
          <ParkingMap items={parkingInfoState} />
        </Card>
        <Card>
          <ParkingCard items={parkingInfoState} lastDetection={lastDetectionState} />
          <ParkingTiming items={parkingInfoState} />
        </Card>
      </div>
    </Fragment>
  );
}

export default App;
