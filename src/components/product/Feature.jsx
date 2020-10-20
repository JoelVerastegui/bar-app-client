import React from 'react';
import styles from './Feature.module.scss';

const Feature = ({label, value}) => (
    <div className={styles.feature}>
        <span className={styles.label}>{label}</span>
        <span>{value}</span>
    </div>
)

export default Feature;