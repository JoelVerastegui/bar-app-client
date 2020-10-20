import React, { useState } from 'react';
import styles from './Item.module.scss';
import vars from '../../utilities/_variables.scss';

// ===== Redux ===== //
import { useDispatch } from 'react-redux';
import { editQuantityCartAction, editItemCartAction } from '../../redux/cartDucks';
// ================= //


// ===== Components ===== //
import Svg from '../reusable/Svg';
import Img from '../reusable/Img';
import Motion from '../reusable/Motion';
import ConfirmModal from '../reusable/ConfirmModal';
import CircleButton from '../reusable/CircleButton';
// ====================== //


const Item = ({ name = '', sku = '', volume = 0, label = '', price = 0, img = [], stock = 0, q = 0, productId = 0 }) => {
    const [quantity, setQuantity] = useState(q);
    const [subtotal, setSubtotal] = useState(price * q);
    const [editTimeout, setEditTimeout] = useState(0);
    const [diff, setDiff] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const validateQuantity = (q) => {
        return q > stock || q <= 0 ? false : true;
    }

    const calcSubtotal = (q) => {
        setSubtotal(Number(q) * price);
    }

    const editDispatch = (diff) => {
        clearTimeout(editTimeout);

        setEditTimeout(setTimeout(() => {
            dispatch(editQuantityCartAction(productId, diff));
            setDiff(0);
        }, 1000));
    }

    const addQuantity = () => {
        if (validateQuantity(Number(quantity) + 1)) {
            calcSubtotal(Number(quantity) + 1);
            setQuantity(Number(quantity) + 1);
            setDiff(diff + 1);
            editDispatch(diff + 1);
        }
    }

    const removeQuantity = () => {
        if (validateQuantity(Number(quantity) - 1)) {
            calcSubtotal(Number(quantity) - 1);
            setQuantity(Number(quantity) - 1);
            setDiff(diff - 1);
            editDispatch(diff - 1);
        }
    }

    const showConfirmModal = () => {
        setShowModal(true);
    }

    const hideConfirmModal = () => {
        setShowModal(false);
    }

    const removeItem = () => {
        dispatch(editItemCartAction(productId));
    }

    return (
        <>
            <div className={styles.container + ' shadow'}>
                <div className={styles.pic}>
                    <div className={styles.img}>
                        <Img src={img[0]} alt="drink" />
                    </div>
                    <div className={styles.title}>
                        <span className={styles.name}>{name}</span>
                        <span className={styles.sku}>#{sku}</span>
                    </div>
                </div>
                <div className={styles.features}>
                    <div>
                        <label>Volumen &nbsp;</label>
                        <span>{volume}ml</span>
                    </div>
                    <div>
                        <label>Etiqueta &nbsp;</label>
                        <span>{label}</span>
                    </div>
                    <div>
                        <label>Precio &nbsp;</label>
                        <span>S/. {Number(price).toFixed(2)}</span>
                    </div>
                    <div>
                        <label>Subtotal &nbsp;</label>
                        <span>S/. {Number(subtotal).toFixed(2)}</span>
                    </div>
                </div>
                <div className={styles.options}>
                    <div className={styles.edit}>
                        <span>{quantity}</span>
                        <div className={styles.controls}>
                            <CircleButton 
                                svg="plus"
                                fill={vars.baseLight} 
                                bg={vars.baseColor}
                                hoverColor={vars.primaryLight}
                                tapColor={vars.primaryDark}
                                onClick={addQuantity} />
                            <CircleButton 
                                svg="remove"
                                fill={vars.baseLight} 
                                bg={vars.baseColor}
                                hoverColor={vars.primaryLight}
                                tapColor={vars.primaryDark}
                                onClick={removeQuantity} />
                        </div>
                    </div>
                    <Motion
                        whileHover={{ scale: 1.2, backgroundColor: '#b80000' }}
                        whileTap={{ scale: 0.9, backgroundColor: '#8f0000' }}>
                        <button className={styles.remove + ' shadow'} onClick={showConfirmModal}>
                            <Svg img="trash" fill={vars.baseLight} width="2.1875rem" height="2.1875rem" />
                        </button>
                    </Motion>
                </div>
            </div>
            { showModal && (
                <ConfirmModal
                    message="El item seleccionado se eliminará de la lista de compras."
                    onConfirm={removeItem}
                    onCancel={hideConfirmModal} />
            )}
        </>
    )
}

export default Item;