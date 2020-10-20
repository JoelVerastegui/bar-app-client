import React from 'react';
import styles from './CartButton.module.scss';
import vars from '../../utilities/_variables.scss';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

// ===== Components ===== //
import Motion from '../reusable/Motion';
import Svg from '../reusable/Svg';
// ====================== //

const CartButton = ({ location }) => {
    const items = useSelector(store => store.cart.cart.length);
    if(location.pathname.includes('cart')) return null;

    return (
        <Link to="/cart">
            <Motion whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button className={styles.container}>
                    { items !== 0 && (
                        <div className={styles.notification}>{items}</div>
                    ) }
                    <Svg img="cart" fill={vars.baseLight} width="1.875rem" height="1.875rem" />
                </button>
            </Motion>
        </Link>
    )
}

export default withRouter(CartButton);