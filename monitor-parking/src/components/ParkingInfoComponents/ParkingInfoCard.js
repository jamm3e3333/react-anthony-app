import React, { useState, useEffect, useCallback, Fragment } from 'react';

import ParkingCard from './ParkingItems/ParkingCard'
import ParkingTiming from './ParkingItems/ParkingTiming';
import ParkingMap from './ParkingItems/ParkingMap';

const url = '/api/monitor/data';
const urlLocal = 'http://localhost:3010/monitor/data';

const ParkingInfoCard = props => {

    const [parkingInfoState, setParkingInfoState] = useState([]);
    const [lastDetectionState, setlastDetectionState] = useState(null);
    const [isError, setIsError ] = useState(false);

    const setError = useCallback(error => {
        props.passError(error);
        setIsError(error);
    }, [props]);

    const fetchData = useCallback(async () => {
        try{
            setError(false);

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
            setError(true);
            console.log(e);
        }
      }, [setError]);
    
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
            <ParkingMap items={parkingInfoState} />
            <ParkingCard items={parkingInfoState} lastDetection={lastDetectionState} />
            <ParkingTiming items={parkingInfoState} />
        </Fragment>
    )
}

export default ParkingInfoCard;