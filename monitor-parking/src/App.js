import React from 'react';
import classes from './App.module.css';
import Card from './components/UI/Card';
import ParkingCard from './components/ParkingInfoComponents/ParkingCard'
import CardItem from './components/UI/CardItem'


function App() {
  return (
      <div className={classes['header__main']}>
        <Card>
          <CardItem>
            <p>ahoj</p>
          </CardItem>
        </Card>
        <Card>
          <ParkingCard />
          <CardItem>
            <p>5 nejdéle obsazených parkovacích míst</p>
          </CardItem>
        </Card>
      </div>
  );
}

export default App;
