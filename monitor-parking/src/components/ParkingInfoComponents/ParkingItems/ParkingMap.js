import { Stage, Layer, Circle } from 'react-konva';
import CardItem from '../../UI/CardItem';

import classes from './ParkingMap.module.css';

const coords = {
  0: {
    coord: {
      x: 60,
      y: 150
    }
  },
  1: {
    coord: {
      x: 80,
      y: 170
    }
  },
  2: {
    coord: {
      x: 100,
      y: 190
    }
  },


  3: {
    coord: {
      x: 140,
      y: 210
    }
  },
  4: {
    coord: {
      x: 170,
      y: 190
    }
  },
  5: {
    coord: {
      x: 200,
      y: 170
    }
  },
  6: {
    coord: {
      x: 230,
      y: 150
    }
  },
  7: {
    coord: {
      x: 260,
      y: 130
    }
  },
  8: {
    coord: {
      x: 290,
      y: 110
    }
  },
  9: {
    coord: {
      x: 320,
      y: 90
    }
  },
  10: {
    coord: {
      x: 340,
      y: 70
    }
  },
  11: {
    coord: {
      x: 360,
      y: 50
    }
  },

  12: {
    coord: {
      x: 260,
      y: 240
    }
  },
  13: {
    coord: {
      x: 280,
      y: 225
    }
  },
  14: {
    coord: {
      x: 300,
      y: 210
    }
  },
  15: {
    coord: {
      x: 320,
      y: 195
    }
  },
  16: {
    coord: {
      x: 340,
      y: 180
    }
  },
  17: {
    coord: {
      x: 360,
      y: 165
    }
  },
  18: {
    coord: {
      x: 380,
      y: 150
    }
  },
  19: {
    coord: {
      x: 400,
      y: 135
    }
  },
  20: {
    coord: {
      x: 420,
      y: 120
    }
  },
  21: {
    coord: {
      x: 440,
      y: 105
    }
  },


  22: {
    coord: {
      x: 280,
      y: 260
    }
  },
  23: {
    coord: {
      x: 300,
      y: 245
    }
  },
  24: {
    coord: {
      x: 320,
      y: 230
    }
  },
  25: {
    coord: {
      x: 340,
      y: 215
    }
  },
  26: {
    coord: {
      x: 360,
      y: 200
    }
  },27: {
    coord: {
      x: 380,
      y: 185
    }
  },
  28: {
    coord: {
      x: 400,
      y: 170
    }
  },
  29: {
    coord: {
      x: 420,
      y: 155
    }
  },
  30: {
    coord: {
      x: 440,
      y: 140
    }
  },
  31: {
    coord: {
      x: 460,
      y: 125
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
          radius={5.5} 
          fill={item.obsazeno ? "rgb(252, 3, 3)": "rgb(3, 252, 32)"} 
        />
      )
    });

    return (
        <CardItem className={classes['card__item--map']}>
          {items && <Stage width={640} height={400} >
            <Layer>
                {items}
            </Layer>  
          </Stage>  }
          {/* <div className={classesCardItem['card__item--span']}>mapy: Google Maps</div> */}
        </CardItem>
    )
}

export default ParkingMap;