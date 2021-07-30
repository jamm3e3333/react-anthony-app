import { Fragment } from 'react';

import classes from '../UI/CardItem.module.css';

import CardItem from '../UI/CardItem';
import ParkingInfoParagraph from './ParkingInfo/ParkingInfoParagraph';

const ParkingCard = props => {
    const date = new Date();

    return ( 
        <Fragment>
            <CardItem>
                <ParkingInfoParagraph 
                    title="Parkovací doba"
                    data={`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
                />
                <ParkingInfoParagraph 
                    title="Počet volných parkovacích míst"
                    data={5}
                />
                <ParkingInfoParagraph 
                    title="Počet obsazených parkovacích míst"
                    data={3}
                />
                <ParkingInfoParagraph 
                    title="Celkový počet parkovacích míst"
                    data={50}
                />
            </CardItem>
            <CardItem>
                <p>Průměrná obsazenost parkoviště</p>
                <div>
                    ahoj
                </div>
                <div className={classes['card__item--blue']}>
                    <p>78%</p>
                </div>  
            </CardItem>
        </Fragment>
    )
}

export default ParkingCard;
