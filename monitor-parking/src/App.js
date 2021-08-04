import React, { useState, useEffect, useCallback, Fragment } from 'react';

import classes from './App.module.css';

import Card from './components/UI/Card';
import ParkingCard from './components/ParkingInfoComponents/ParkingCard'
import ParkingTiming from './components/ParkingInfoComponents/ParkingTiming/ParkingTiming';
import ParkingMap from './components/ParkingInfoComponents/ParkingMap';
import Modal from './components/UI/Modal';

const url = 'http://localhost:3010/monitor/data';

const App = () => {
  

  const [parkingInfoState, setParkingInfoState] = useState([]);
  const [lastDetectionState, setlastDetectionState] = useState(null);
  const [isError, setIsError ] = useState(false);

  const fetchData = useCallback(async () => {
    try{
      setIsError(false);
      const response = await fetch(url);

      if(response.status !== 200) {
        throw new Error();
      }
      const data = await response.json();

      const { parkingLots } = data.data; //updated data


      setlastDetectionState(data.data.lastDetection);

      setParkingInfoState((prevState) => {
        const upToDateLots = [...prevState]; //old data

        if(!upToDateLots.length) {
          return parkingLots;
        }
        parkingLots.forEach((lot) => {
          const index = upToDateLots.findIndex(oldLot => oldLot.id === lot.id);
          if(index !== -1) {
            upToDateLots[index] = lot;
          }
          else{
            upToDateLots.push(lot);
          } 
        })
        return upToDateLots;
      });
      
    }
    catch(e){
      setIsError(true);
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
      {isError && <Modal>Error while fetching data</Modal>}
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
