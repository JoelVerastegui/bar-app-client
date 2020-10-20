import React, { useState } from 'react';
import styles from './MenuBar.module.scss';
import vars from '../../utilities/_variables.scss';

// ===== Components ===== //
// import Motion from '../reusable/Motion';
import Svg from '../reusable/Svg';
// ====================== //

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuBar = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={styles.container} style={{ clipPath: (isOpen ? 'circle(120vh at 40px 35px)' : 'circle(30px at 40px 35px)') }}>
            <div className={styles.content}>
                <div className={styles.toggleButton}>
                    <div onClick={toggleMenuBar}>
                        <Svg img={isOpen ? "close" : "burger"} fill={vars.baseLight} width="2.5rem" height="2.5rem" />
                    </div>
                </div>
                <span style={{ color: 'white' }}></span>
            </div>
        </div>
    )
}

export default MenuBar;