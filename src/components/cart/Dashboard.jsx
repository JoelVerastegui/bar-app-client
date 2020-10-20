import React from 'react';
import styles from './Dashboard.module.scss';
import { useSelector } from 'react-redux';

// ===== Components ===== //
import Item from './Item';
// ====================== //

const Dashboard = () => {
    let cart = useSelector(store => store.cart.cart);
    const products = useSelector(store => store.drink.products.filter(x => cart.find(y => y.productId === x.id) !== undefined));

    return (
        <div className={styles.container}>
            <h1>Productos ({cart.length})</h1>
            {!cart || cart.length === 0 ? (
                <h2>No tiene productos agregados al carrito ¯\_(ツ)_/¯</h2> // shrug emoticon
            ) : (
                    <div className={styles.list}>
                        <div className={styles.headersMargin}>
                            <div></div>
                            <div className={styles.headers}>
                                <span>Volumen</span>
                                <span>Etiqueta</span>
                                <span>Precio</span>
                                <span>Subtotal</span>
                            </div>
                            <div></div>
                        </div>
                        {cart && cart.length > 0 && cart.map(f => (
                            <Item key={f.productId} {...products.find(x => x.id === f.productId)} q={f.quantity} productId={f.productId} />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Dashboard;