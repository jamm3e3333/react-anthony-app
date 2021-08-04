import { Stage, Layer, Circle } from 'react-konva';

import CardItem from '../UI/CardItem';
import classesCardItem from '../UI/CardItem.module.css';

const coords = {
  lot0: {
    id: 'lot0',
    coord: {
      x: 10,
      y: 150
    }
  },
  lot1: {
    id: 'lot1',
    coord: {
      x: 30,
      y: 170
    }
  },
  lot2: {
    id: 'lot2',
    coord: {
      x: 50,
      y: 190
    }
  },
  lot3: {
    id: 'lot3',
    coord: {
      x: 90,
      y: 210
    }
  },
  lot4: {
    id: 'lot4',
    coord: {
      x: 120,
      y: 190
    }
  },
  lot5: {
    id: 'lot5',
    coord: {
      x: 150,
      y: 170
    }
  },
  lot6: {
    id: 'lot6',
    coord: {
      x: 180,
      y: 150
    }
  },
  lot7: {
    id: 'lot7',
    coord: {
      x: 210,
      y: 130
    }
  },
  lot8: {
    id: 'lot8',
    coord: {
      x: 240,
      y: 110
    }
  },
  lot9: {
    id: 'lot9',
    coord: {
      x: 270,
      y: 90
    }
  },
  lot10: {
    id: 'lot10',
    coord: {
      x: 180,
      y: 260
    }
  },
  lot11: {
    id: 'lot11',
    coord: {
      x: 210,
      y: 240
    }
  },
  lot12: {
    id: 'lot12',
    coord: {
      x: 240,
      y: 220
    }
  },
  lot13: {
    id: 'lot13',
    coord: {
      x: 270,
      y: 200
    }
  },
  lot14: {
    id: 'lot14',
    coord: {
      x: 300,
      y: 180
    }
  },
  lot15: {
    id: 'lot15',
    coord: {
      x: 330,
      y: 160
    }
  },
  lot16: {
    id: 'lot16',
    coord: {
      x: 240,
      y: 270
    }
  },
  lot17: {
    id: 'lot17',
    coord: {
      x: 270,
      y: 250
    }
  },
  lot18: {
    id: 'lot18',
    coord: {
      x: 300,
      y: 230
    }
  },
  lot19: {
    id: 'lot19',
    coord: {
      x: 330,
      y: 210
    }
  },
  lot20: {
    id: 'lot20',
    coord: {
      x: 360,
      y: 190
    }
  }
};

const ParkingMap = props => {

    const items = !props.items.length ? undefined: props.items.map(item => {
    
      return (
        <Circle 
          key={item.id} 
          x={coords[item.id].coord.x} 
          y={coords[item.id].coord.y} 
          radius={8} 
          fill={item.occupated ? "rgb(252, 3, 3)" : "rgb(3, 252, 32)"} 
        />
      )
    });

    return (
        <CardItem className={classesCardItem['card__item--map']}>
          {items && <Stage width={640} height={400} >
            <Layer>
                {items}
            </Layer>  
          </Stage>  }
        </CardItem>
    )
}

export default ParkingMap;