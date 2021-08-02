import classes from '../ParkingInfo/ParkingInfoParagraph.module.css';

import ParkingInfoParagraph from '../ParkingInfo/ParkingInfoParagraph'
import CardItem from '../../UI/CardItem';

const ParkingTiming = props => {
    const parkingTime = [];
    const parkingTimingItem = [...props.items.parkingLots];
    
    parkingTimingItem.filter((item) => item.occupated)
    .sort((a, b ) =>  a.parkingStart - b.parkingStart)
    .slice(0,5)
    .forEach(item => {
        const parkingTimeObject = {};

        const curTime = Math.floor((new Date().getTime() - item.parkingStart)/1000);

        parkingTimeObject["id"] = item.id;
        parkingTimeObject["hours"] = Math.floor(curTime/3600);
        parkingTimeObject["minutes"] = Math.floor((curTime%3600)/60) < 10 ? '0' + Math.floor((curTime%3600)/60) : Math.floor((curTime%3600)/60);
        parkingTimeObject["seconds"] = Math.floor(curTime%60) < 10 ? '0' + Math.floor(curTime%60) : Math.floor(curTime%60);
        parkingTime.push(parkingTimeObject);
    })

    return (
        <CardItem>
            <p>5 nejdéle obsazených parkovacích míst</p>
            {parkingTime.map((item) => {
                return (
                    <ParkingInfoParagraph 
                        className={classes['parking__info--red']}
                        key={item.id}
                        title={item.id}
                        data={`${item.hours}:${item.minutes}:${item.seconds}`}
                    />
                )
            })}
        </CardItem>
    )
}

export default ParkingTiming;