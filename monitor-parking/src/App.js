import classes from './App.module.css';

import Card from './components/UI/Card';
import ParkingCard from './components/ParkingInfoComponents/ParkingCard'
import ParkingTiming from './components/ParkingInfoComponents/ParkingTiming/ParkingTiming';
import ParkingMap from './components/ParkingInfoComponents/ParkingMap';


const App = () => {
  const parkingInfo = {
    lastDetection: new Date(),
    parkingLots: [
    {
      id: 'lot0',
      occupated: false,
      parkingStart: 0,
      coord: {
        x: 10,
        y: 150
      }
    },
    {
      id: 'lot1',
      occupated: true,
      parkingStart: 1627646500000,
      coord: {
        x: 30,
        y: 170
      }
    },
    {
      id: 'lot2',
      occupated: false,
      parkingStart: 0,
      coord: {
        x: 50,
        y: 190
      }
    },
    {
      id: 'lot3',
      occupated: true,
      parkingStart: 1627640075000,
      coord: {
        x: 90,
        y: 210
      }
    },
    {
      id: 'lot4',
      occupated: false,
      parkingStart: 0,
      coord: {
        x: 120,
        y: 190
      }
    },
    {
      id: 'lot5',
      occupated: false,
      parkingStart: 0,
      coord: {
        x: 150,
        y: 170
      }
    },
    {
      id: 'lot6',
      occupated: true,
      parkingStart: 1627640780000,
      coord: {
        x: 180,
        y: 150
      }
    },
    {
      id: 'lot7',
      occupated: false,
      parkingStart: 0,
      coord: {
        x: 210,
        y: 130
      }
    },
    {
      id: 'lot8',
      occupated: true,
      parkingStart: 1627640870000,
      coord: {
        x: 240,
        y: 110
      }
    },
    {
      id: 'lot9',
      occupated: false,
      parkingStart: 0,
      coord: {
        x: 270,
        y: 90
      }
    },
    {
      id: 'lot10',
      occupated: true,
      parkingStart: 162764060000,
      coord: {
        x: 180,
        y: 260
      }
    },
    {
      id: 'lot11',
      occupated: false,
      parkingStart: 0,
      coord: {
        x: 210,
        y: 240
      }
    },
    {
      id: 'lot12',
      occupated: false,
      parkingStart: 0,
      coord: {
        x: 240,
        y: 220
      }
    },
    {
      id: 'lot13',
      occupated: true,
      parkingStart: 1627646500000,
      coord: {
        x: 270,
        y: 200
      }
    },
    {
      id: 'lot14',
      occupated: true,
      parkingStart: 1627640540000,
      coord: {
        x: 300,
        y: 180
      }
    },
    {
      id: 'lot15',
      occupated: true,
      parkingStart: 1620000000000,
      coord: {
        x: 330,
        y: 160
      }
    },
    {
      id: 'lot16',
      occupated: true,
      parkingStart: 1620000000000,
      coord: {
        x: 240,
        y: 270
      }
    },
    {
      id: 'lot17',
      occupated: true,
      parkingStart: 1620000000000,
      coord: {
        x: 270,
        y: 250
      }
    },
    {
      id: 'lot18',
      occupated: true,
      parkingStart: 1620000000000,
      coord: {
        x: 300,
        y: 230
      }
    },
    {
      id: 'lot19',
      occupated: true,
      parkingStart: 1620000000000,
      coord: {
        x: 330,
        y: 210
      }
    },
    {
      id: 'lot20',
      occupated: true,
      parkingStart: 1620000000000,
      coord: {
        x: 360,
        y: 190
      }
    }
  ]}
  return (
      <div className={classes['header__main']}>
        <Card>
          <ParkingMap items={parkingInfo} />
        </Card>
        <Card>
          <ParkingCard items={parkingInfo} />
          <ParkingTiming items={parkingInfo} />
        </Card>
      </div>
  );
}

export default App;
