import { Fragment } from 'react';

import classes from '../UI/CardItem.module.css';
import classesPara from './ParkingInfo/ParkingInfoParagraph.module.css';

import CardItem from '../UI/CardItem';
import ParkingInfoParagraph from './ParkingInfo/ParkingInfoParagraph';

const ParkingCard = props => {
    let freeSpace = 0;
    props.items.parkingLots.forEach((item) => {
        if(!item.occupated) {
            freeSpace++;
        }
    });
    const occupatedSpace = props.items.parkingLots.length - freeSpace;

    const avgOccupated = ((occupatedSpace/props.items.parkingLots.length) *100).toFixed(1);

    return ( 
        <Fragment>
            <CardItem>
                <ParkingInfoParagraph className={classesPara['parking__info--grey']} 
                    title="Parkovací doba"
                    data={`${props.items.lastDetection.toLocaleDateString()} ${props.items.lastDetection.toLocaleTimeString()}`}
                />
                <ParkingInfoParagraph className={classesPara['parking__info--grey']}
                    title="Počet volných parkovacích míst"
                    data={freeSpace}
                />
                <ParkingInfoParagraph className={classesPara['parking__info--grey']}
                    title="Počet obsazených parkovacích míst"
                    data={occupatedSpace}
                />
                <ParkingInfoParagraph className={classesPara['parking__info--grey']}
                    title="Celkový počet parkovacích míst"
                    data={props.items.parkingLots.length}
                />
            </CardItem>
            <CardItem>
                <p>Průměrná obsazenost parkoviště</p>
                <div>
                    Graf
                </div>
                <div>
                    <p className={classes['card__item--blue']}>{`${avgOccupated}%`}</p>
                </div>
            </CardItem>
        </Fragment>
    )
}

export default ParkingCard;
