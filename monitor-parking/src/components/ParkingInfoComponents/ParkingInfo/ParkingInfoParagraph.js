import classes from './ParkingInfoParagraph.module.css';

const ParkingInfoParagraph = props => {
    return (
        <p className={`${classes['parking__info--paragraph']} ${props.className}`}>
            <span className={classes['parking__info--item']}>{props.title}</span>
            <span className={classes['parking__info--item']}>{props.data}</span>
        </p>
    )
}

export default ParkingInfoParagraph;