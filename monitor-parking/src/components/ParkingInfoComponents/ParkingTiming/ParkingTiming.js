import classes from '../ParkingInfo/ParkingInfoParagraph.module.css';

import ParkingInfoParagraph from '../ParkingInfo/ParkingInfoParagraph'
import CardItem from '../../UI/CardItem';

const ParkingTiming = props => {
    const parkingTimingItemSorted = [...props.items.parkingLots];
    parkingTimingItemSorted.sort((a, b ) =>  b.parkingStart - a.parkingStart)
                            
    return (
        <CardItem>
            <p>5 nejdéle obsazených parkovacíh míst</p>
            {parkingTimingItemSorted.slice(0,5)
                                    .map((item) => {
                return (
                    <ParkingInfoParagraph 
                        className={classes['parking__info--red']}
                        key={item.id}
                        title={item.id}
                        data={new Date(item.parkingStart).toTimeString().substr(0,8)}
                    />
                )
            })}
        </CardItem>
    )
}

export default ParkingTiming;