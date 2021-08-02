import { Stage, Layer, Circle } from 'react-konva';

import CardItem from '../UI/CardItem';
import classesCardItem from '../UI/CardItem.module.css';

const ParkingMap = props => {
    return (
        <CardItem className={classesCardItem['card__item--map']}>
          <Stage width={640} height={400} >
            <Layer>
                {props.items.parkingLots.map(item => {
                  return (
                    <Circle 
                      key={item.id} 
                      x={item.coord.x} 
                      y={item.coord.y} 
                      radius={8} 
                      fill={item.occupated ? "rgb(252, 3, 3)" : "rgb(3, 252, 32)"} 
                    />
                  )
                })}
            </Layer>  
          </Stage>  
        </CardItem>
    )
}

export default ParkingMap;