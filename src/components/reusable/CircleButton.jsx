import React from 'react';
import styles from './CircleButton.module.scss';

// ===== Components ===== //
import Motion from './Motion';
import Svg from './Svg';
// ====================== //

const CircleButton = ({ svg, fill, bg, hoverColor, tapColor, onClick }) => (
    <Motion
        whileHover={{ backgroundColor: hoverColor }}
        whileTap={{ scale: 0.8, backgroundColor: tapColor }}
        transition={{ duration: 0.1 }}>
        <button className={styles.button + " shadow"} onClick={onClick} style={{ backgroundColor: bg }}>
            <Svg img={svg} fill={fill} width="1.5625rem" height="1.5625rem" />
        </button>
    </Motion>
)

export default CircleButton;