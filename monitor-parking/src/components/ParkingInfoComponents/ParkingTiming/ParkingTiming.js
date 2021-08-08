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
        .forEach(item => {
            const datum = new Date(item.datum).getTime();
            item.datum =datum;
        })

        parkingTimingItem
        .sort((a, b ) =>  a.datum - b.datum)
        .slice(0,5)
        .forEach(item => {
            const parkingTimeObject = {};
    
            const curTime = Math.floor(( new Date(new Date().toLocaleString('en-US', {timeZone: "Europe/Prague"})).getTime() - item.datum)/1000);
            
            parkingTimeObject["id"] = item.id;
            parkingTimeObject["hours"] = Math.floor(curTime/3600);
            parkingTimeObject["minutes"] = Math.floor(curTime/60)%60;
            parkingTimeObject["seconds"] = curTime%60;
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