import classes from '../ParkingInfo/ParkingInfoParagraph.module.css';
import classesPara from '../../UI/CardItem.module.css';

import ParkingInfoParagraph from '../ParkingInfo/ParkingInfoParagraph'
import CardItem from '../../UI/CardItem';

const ParkingTiming = props => {
    const parkingTime = [];
    const parkingTimingItem = [...props.items];
    if(!parkingTimingItem.length) {
        
    }
    else {
        parkingTimingItem.filter((item) => item.obsazeno)
        .sort((a, b ) => b.datum - a.datum)
        .slice(0,5)
        .forEach(item => {
            const parkingTimeObject = {};
            
            parkingTimeObject["id"] = item.id;
            parkingTimeObject["hours"] = Math.floor(item.datum/3600);
            parkingTimeObject["minutes"] = Math.floor(item.datum/60)%60 < 10 ? '0'+Math.floor(item.datum/60)%60: Math.floor(item.datum/60)%60;
            parkingTimeObject["seconds"] = item.datum%60 < 10 ? '0' + item.datum%60 : item.datum%60;
            parkingTime.push(parkingTimeObject);
        })
    }
    return (
        <CardItem>
            <p className={classesPara['card__item--green']}>5 nejdéle obsazených parkovacích míst</p>
            {parkingTime.length > 0 && parkingTime.map((item) => {
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