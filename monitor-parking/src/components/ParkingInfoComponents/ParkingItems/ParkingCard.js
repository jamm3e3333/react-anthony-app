import { Fragment } from 'react';

import classes from './ParkingCard.module.css';

import CardItem from '../../UI/CardItem';
import ParkingInfoParagraph from '../../UI/ParkingInfoParagraph';

const ParkingCard = props => {
    
    const lastDetection = props.lastDetection !== null 
    ? `${new Date(props.lastDetection).toLocaleDateString()} ${new Date(props.lastDetection).toLocaleTimeString()}` 
    : props.t('parkingCard.notFound');
    
    let freeSpace = 0;
    props.items.forEach((item) => {
        if(!item.obsazeno) {
            freeSpace++;
        }
    });
    const occupatedSpace = props.items.length - freeSpace;

    const avgOccupated = ((occupatedSpace/props.items.length) *100).toFixed(1);

    return ( 
        <Fragment>
            <CardItem>
                <ParkingInfoParagraph className={classes['parking__info--grey']} 
                    title={props.t('parkingCard.lastDet')}
                    data={lastDetection}
                />
                <ParkingInfoParagraph className={classes['parking__info--grey']}
                    title={props.t('parkingCard.freeAmount')}
                    data={freeSpace}
                />
                <ParkingInfoParagraph className={classes['parking__info--grey']}
                    title={props.t('parkingCard.occAmount')}
                    data={occupatedSpace}
                />
                <ParkingInfoParagraph className={classes['parking__info--grey']}
                    title={props.t('parkingCard.totalAmount')}
                    data={props.items.length}
                />
            </CardItem>
            <CardItem>
                <p className={classes['card__item--green']}>{props.t('parkingCard.perc')}</p>
                <div className={classes['card__item--percentage']}>
                    {!isNaN(avgOccupated) ? <p className={classes['card__item--blue']}>{`${avgOccupated}%`}</p> : <p className={classes['card__item--blue']}>{props.t('parkingCard.notFound')}</p>}
                </div>
            </CardItem>
        </Fragment>
    )
}

export default ParkingCard;
