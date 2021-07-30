import React from 'react';

import classes from './App.module.css';

import MapImg from './assets/map__view.png';

import Card from './components/UI/Card';
import ParkingCard from './components/ParkingInfoComponents/ParkingCard'
import CardItem from './components/UI/CardItem'
import ParkingTiming from './components/ParkingInfoComponents/ParkingTiming/ParkingTiming';


const App = () => {
  const parkingInfo = {
    lastDetection: new Date(),
    parkingLots: [
    {
      id: 'lot0',
      occupated: true,
      parkingStart: 1627643300000,
    },
    {
      id: 'lot1',
      occupated: true,
      parkingStart: 1627646500000,
    },
    {
      id: 'lot2',
      occupated: true,
      parkingStart: 1627640005000,
    },
    {
      id: 'lot3',
      occupated: true,
      parkingStart: 1627640075000,
    },
    {
      id: 'lot4',
      occupated: false,
      parkingStart: 0,
    },
    {
      id: 'lot5',
      occupated: false,
      parkingStart: 0,
    },
    {
      id: 'lot6',
      occupated: true,
      parkingStart: 1627640780000,
    },
    {
      id: 'lot7',
      occupated: false,
      parkingStart: 0,
    },
    {
      id: 'lot8',
      occupated: true,
      parkingStart: 1627640870000,
    },
    {
      id: 'lot9',
      occupated: false,
      parkingStart: 0,
    },
    {
      id: 'lot10',
      occupated: true,
      parkingStart: 162764060000,
    },
    {
      id: 'lot11',
      occupated: false,
      parkingStart: 0,
    },
    {
      id: 'lot12',
      occupated: false,
      parkingStart: 0,
    },
    {
      id: 'lot13',
      occupated: true,
      parkingStart: 1627646500000,
    },
    {
      id: 'lot14',
      occupated: true,
      parkingStart: 1627640540000,
    },
  ]}
  return (
      <div className={classes['header__main']}>
        <Card>
          <CardItem>
            <img src={MapImg} alt="map view" />
          </CardItem>
        </Card>
        <Card>
          <ParkingCard items={parkingInfo} />
          <ParkingTiming items={parkingInfo} />
        </Card>
      </div>
  );
}

export default App;
