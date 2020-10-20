import React from 'react';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const Menu = ({href, label}) => (
    <NavLink exact to={"/" + (href || '')} className={styles.container} activeClassName={styles.activeMenu}>
        <span>{href || label || ''}</span>
    </NavLink>
)

export default Menu;