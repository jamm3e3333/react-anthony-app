import React, { useState, useEffect, useCallback, Fragment } from 'react';

import ParkingCard from './ParkingItems/ParkingCard'
import ParkingTiming from './ParkingItems/ParkingTiming';
import ParkingMap from './ParkingItems/ParkingMap';

const url = 'api/monitor/data';

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

            const response = await fetch(url);
            
            if(!response.ok) {
                throw new Error('Chyba pri odesilani dat');
            }
            const data = await response.json();

            if(!data) {
                throw new Error('No data present.');
            }
            
            const { parkingLots } = data; //updated data
    
            setlastDetectionState(data.lastDetection);
        
            setParkingInfoState(() => {
                return parkingLots;        
            }); 
        }
        catch(e){
            setError(true);
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
            <ParkingCard t={props.t} items={parkingInfoState} lastDetection={lastDetectionState} />
            <ParkingTiming t={props.t} items={parkingInfoState} />
        </Fragment>
    )
}

export default ParkingInfoCard;