import React from 'react';
import styles from './DrinkCard.module.scss';
import Img from '../reusable/Img';

const DrinkCard = ({img, name, price}) => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <Img src={img} alt="drinkImg" />
                <div className={styles.description}>
                    <h5>{name || 'Sin nombre'}</h5>
                    <h6>S/. {price || '0.00'}</h6>
                </div>
            </div>
        </div>
    )
}

export default DrinkCard;