import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import canvasBg from '../../../assets/map__view_title.jpg'
import classes from './ParkingMap.module.css';

const coords = {
  //first 3 places
  0: {
    coord: {
      x: 90,
      y: 140
    }
  },
  1: {
    coord: {
      x: 110,
      y: 160
    }
  },
  2: {
    coord: {
      x: 130,
      y: 180
    }
  },

  //first lane
  3: {
    coord: {
      x: 170,
      y: 200
    }
  },
  4: {
    coord: {
      x: 200,
      y: 180
    }
  },
  5: {
    coord: {
      x: 230,
      y: 160
    }
  },
  6: {
    coord: {
      x: 260,
      y: 140
    }
  },
  7: {
    coord: {
      x: 290,
      y: 120
    }
  },
  8: {
    coord: {
      x: 320,
      y: 100
    }
  },
  9: {
    coord: {
      x: 350,
      y: 75
    }
  },
  10: {
    coord: {
      x: 380,
      y: 50
    }
  },
  11: {
    coord: {
      x: 410,
      y: 25
    }
  },

  12: {
    coord: {
      x: 290,
      y: 230
    }
  },
  13: {
    coord: {
      x: 310,
      y: 215
    }
  },
  14: {
    coord: {
      x: 330,
      y: 200
    }
  },
  15: {
    coord: {
      x: 350,
      y: 185
    }
  },
  16: {
    coord: {
      x: 370,
      y: 170
    }
  },
  17: {
    coord: {
      x: 390,
      y: 155
    }
  },
  18: {
    coord: {
      x: 410,
      y: 140
    }
  },
  19: {
    coord: {
      x: 430,
      y: 125
    }
  },
  20: {
    coord: {
      x: 450,
      y: 110
    }
  },
  21: {
    coord: {
      x: 470,
      y: 95
    }
  },


  22: {
    coord: {
      x: 310,
      y: 250
    }
  },
  23: {
    coord: {
      x: 330,
      y: 235
    }
  },
  24: {
    coord: {
      x: 350,
      y: 220
    }
  },
  25: {
    coord: {
      x: 370,
      y: 205
    }
  },
  26: {
    coord: {
      x: 390,
      y: 190
    }
  },27: {
    coord: {
      x: 410,
      y: 175
    }
  },
  28: {
    coord: {
      x: 430,
      y: 160
    }
  },
  29: {
    coord: {
      x: 450,
      y: 145
    }
  },
  30: {
    coord: {
      x: 470,
      y: 130
    }
  },
  31: {
    coord: {
      x: 490,
      y: 115
    }
  }
};

const ParkingMap = props => {
  
    const img = useMemo(() => new Image(), []);
    
    img.src = canvasBg;

    const canvasRef = useRef();

    const draw = useCallback((ctx,x,y,color) => {
        ctx.fillStyle = color ? "rgb(252, 3, 3)" : "rgb(3, 252, 32)";
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, 2*Math.PI)
        ctx.fill()
      }, []);


    useEffect(() => {
        const canvas = canvasRef.current;
        
        canvas.width = 640;
        canvas.height = 400;
        const ctx = canvas.getContext('2d');
        img.onload = () => {
            ctx.drawImage(img, 0 , 0); 

            if(props.items.length > 0){
              props.items.map(item => {
                return draw(ctx, coords[item.id].coord.x, coords[item.id].coord.y, item.obsazeno);
              })
            }
        }

    }, [draw, img, props.items]);



    return (
        <div className={classes['canvas__container']}>
            <canvas className={classes['canvas--rect']} ref={canvasRef} {...props} />
        </div>
    )
}

export default ParkingMap;