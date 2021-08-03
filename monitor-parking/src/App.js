import React, { useState, useEffect } from 'react';

import classes from './App.module.css';

import Card from './components/UI/Card';
import ParkingCard from './components/ParkingInfoComponents/ParkingCard'
import ParkingTiming from './components/ParkingInfoComponents/ParkingTiming/ParkingTiming';
import ParkingMap from './components/ParkingInfoComponents/ParkingMap';
const url = 'http://localhost:3010/monitor/data';


const App = () => {
  const coords = [
    {
      id: 'lot0',
      coord: {
        x: 10,
        y: 150
      }
    },
    {
      id: 'lot1',
      coord: {
        x: 30,
        y: 170
      }
    },
    {
      id: 'lot2',
      coord: {
        x: 50,
        y: 190
      }
    },
    {
      id: 'lot3',
      coord: {
        x: 90,
        y: 210
      }
    },
    {
      id: 'lot4',
      coord: {
        x: 120,
        y: 190
      }
    },
    {
      id: 'lot5',
      coord: {
        x: 150,
        y: 170
      }
    },
    {
      id: 'lot6',
      coord: {
        x: 180,
        y: 150
      }
    },
    {
      id: 'lot7',
      coord: {
        x: 210,
        y: 130
      }
    },
    {
      id: 'lot8',
      coord: {
        x: 240,
        y: 110
      }
    },
    {
      id: 'lot9',
      coord: {
        x: 270,
        y: 90
      }
    },
    {
      id: 'lot10',
      coord: {
        x: 180,
        y: 260
      }
    },
    {
      id: 'lot11',
      coord: {
        x: 210,
        y: 240
      }
    },
    {
      id: 'lot12',
      coord: {
        x: 240,
        y: 220
      }
    },
    {
      id: 'lot13',
      coord: {
        x: 270,
        y: 200
      }
    },
    {
      id: 'lot14',
      coord: {
        x: 300,
        y: 180
      }
    },
    {
      id: 'lot15',
      coord: {
        x: 330,
        y: 160
      }
    },
    {
      id: 'lot16',
      coord: {
        x: 240,
        y: 270
      }
    },
    {
      id: 'lot17',
      coord: {
        x: 270,
        y: 250
      }
    },
    {
      id: 'lot18',
      coord: {
        x: 300,
        y: 230
      }
    },
    {
      id: 'lot19',
      coord: {
        x: 330,
        y: 210
      }
    },
    {
      id: 'lot20',
      coord: {
        x: 360,
        y: 190
      }
    }
  ];

  const [parkingInfoState, setParkingInfoState] = useState(undefined);

  const fetchData = async () => {
    try{
      const response = await fetch(url);
      if(response.status !== 200) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
    }
    catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [fetchData])
  

  return (
      <div className={classes['header__main']}>
        <Card>
          {/* <ParkingMap items={parkingInfoState} /> */}
        </Card>
        <Card>
          {/* <ParkingCard items={parkingInfoState} /> */}
          {/* <ParkingTiming items={parkingInfoState} /> */}
        </Card>
      </div>
  );
}

export default App;
