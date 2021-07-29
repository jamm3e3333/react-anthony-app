import classes from './CardItem.module.css';

const CardItem = props => {
    return (
        <div className={`${classes['card__item']} ${props.className}`}>{props.children}</div>
    )
}

export default CardItem;