import React from 'react';
import styles from './MainContainer.module.scss';

// ===== Components ===== //
import Menu from './Menu';
import MenuBar from './MenuBar';
import CartButton from './CartButton';
// ====================== //

const MainContainer = (props) => (
    <div className={styles.body}>
        <div className={styles.header}>
            <span>El Daniel</span>
            <Menu label="Menu" />
            <Menu href="about" />
        </div>
        <div className={styles.section}>
            {props.children}
        </div>
        <CartButton />
        <MenuBar />
    </div>
)

export default MainContainer;