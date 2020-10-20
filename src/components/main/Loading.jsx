import React from 'react';
import styles from './Loading.module.scss';
import vars from '../../utilities/_variables.scss';

// ===== Components ===== //
import Motion from '../reusable/Motion';
import Svg from '../reusable/Svg';
// ====================== //

const Loading = () => (
    <div className={styles.container}>
        <Motion
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}
            transition={{
                duration: 2,
                loop: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeatDelay: 1
            }}>
            <div className={styles.content}>
                <Svg img="glass" fill={vars.baseLight} />
            </div>
        </Motion>
    </div>
)

export default Loading;