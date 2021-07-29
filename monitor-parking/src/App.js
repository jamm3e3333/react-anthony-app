import React from 'react';
import classes from './App.module.css';
import Card from './components/UI/Card';
import ParkingInfoParagraph from './components/ParkingInfo/ParkingInfo/ParkingInfoParagraph';

function App() {
  return (
      <div className={classes['header__main']}>
        <Card>
          <p>ahoj</p>
        </Card>
        <Card>
          <ParkingInfoParagraph 
            title="Parkovaci doba"
            data={new Date().toISOString()}
          />
        </Card>
      </div>
  );
}

export default App;
