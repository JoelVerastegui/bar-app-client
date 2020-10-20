import React from 'react';
import styles from './CoverPage.module.scss';
import vars from '../../utilities/_variables.scss';

// ===== Components ===== //
import Svg from '../reusable/Svg';
import Motion from '../reusable/Motion';
// ====================== //

const CoverPage = () => {
    const downToGrid = () => {
        window.scrollTo({
            top: document.querySelector('#drinksGrid').offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    } 

    return (
        <div className={styles.container + " parallax"}>
            <div className={styles.content}>
                <h1>¡Tenemos la que buscas!</h1>
                <h4>Las mejores bebidas al mejor precio en un solo lugar!</h4>
                <Motion whileHover={{ scale: [1.0, 1.2, 1.0] }} transition={{ duration: 0.5}} whileTap={{ rotate: [0, 360] }}>
                    <div className={styles.downButton} onClick={downToGrid}>
                        <Svg img="down" fill={vars.baseLight} />
                    </div>
                </Motion>
            </div>
        </div>
    )
}

export default CoverPage;