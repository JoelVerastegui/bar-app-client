import React, { useState } from 'react';
import styles from './ProductDetail.module.scss';
import vars from '../../utilities/_variables.scss';

// ===== Redux ===== //
import { useSelector, useDispatch } from 'react-redux';
import { editItemCartAction } from '../../redux/cartDucks';
// ================= //

// ===== Components ===== //
import Feature from './Feature';
import Svg from '../reusable/Svg';
import Img from '../reusable/Img';
import Zoom from '../reusable/Zoom';
import CircleButton from '../reusable/CircleButton';
// ====================== //

const ProductDetail = ({ id }) => {
    const data = useSelector(store => store.drink.products.find(x => x.id === Number(id)));
    const cartQuantity = useSelector(store => store.cart.cart.find(x => x.productId === Number(id)));
    const [quantity, setQuantity] = useState((cartQuantity && cartQuantity.quantity) || 1);
    const [mainPicture, setMainPicture] = useState(0);
    const dispatch = useDispatch();

    const validateQuantity = (q) => {
        return q > data.stock || q <= 0 ? false : true;
    }

    const removeQuantity = () => {
        if (validateQuantity(Number(quantity) - 1)) {
            setQuantity(Number(quantity) - 1);
        }
    }

    const changeQuantity = (e) => {
        const value = e.target.value;
        const regex = /^([0-9]|[1-9][0-9])$/;

        if (regex.test(value)) {
            if (validateQuantity(value)) {
                setQuantity(value);
            }
        } else {
            e.target.value = quantity;
        }
    }

    const addQuantity = () => {
        if (validateQuantity(Number(quantity) + 1)) {
            setQuantity(Number(quantity) + 1);
        }
    }

    const editItem = () => {
        dispatch(editItemCartAction(id, quantity));
    }

    return (
        <div className={styles.container}>
            <div className={styles.content + " shadow"}>
                <div className={styles.picture}>
                    {data.img.length > 0 && data.img.map((f, i) => (
                        <div key={i} onClick={() => setMainPicture(i)} className={data.img.length === 1 ? (styles.mainPictureLong) : (mainPicture === i ? styles.mainPicture : '')}>
                            { mainPicture === i ? (
                                <Zoom src={f} alt="mainDrink" />
                            ) : (
                                    <Img src={f} alt="drink" />
                                )}
                        </div>
                    ))}
                </div>
                <div className={styles.detail}>
                    <div className={styles.title}>
                        <h1>{data.name}</h1>
                        <small>#{data.sku}</small>
                    </div>
                    <div className={styles.features}>
                        <Feature label="Precio" value={"S/. " + data.price.toFixed(2)} />
                        <Feature label="Etiqueta" value={data.label} />
                        <Feature label="Procedencia" value={data.origin} />
                        <Feature label="Año" value={data.year} />
                        <Feature label="Volumen" value={data.volume + "ml"} />
                    </div>
                    <div className={styles.purchase}>
                        <div className={styles.quantity}>
                            <span>Cantidad</span>
                            <div className={styles.options}>
                                <CircleButton
                                    svg="remove"
                                    fill={vars.baseLight}
                                    bg={vars.secondaryDark}
                                    hoverColor={vars.primaryLight}
                                    tapColor={vars.secondaryDark}
                                    onClick={removeQuantity} />
                                <input type="number" value={quantity} onChange={changeQuantity} />
                                <CircleButton
                                    svg="plus"
                                    fill={vars.baseLight}
                                    bg={vars.secondaryDark}
                                    hoverColor={vars.primaryLight}
                                    tapColor={vars.secondaryDark}
                                    onClick={addQuantity} />
                            </div>
                        </div>
                        <AddButton onClick={editItem} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddButton = ({ onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (!isClicked) {
            setIsClicked(true);
            onClick();
            setTimeout(() => setIsClicked(false), 3000);
        }
    }

    return (
        <div className={styles.button}>
            <button className="shadow" onClick={handleClick}>
                Agregar al carrito
                <Svg img="plus" fill={vars.baseLight} width="2.1875rem" height="2.1875rem" />
            </button>
            <div className={styles.editItem} style={{ clipPath: (isClicked ? 'circle(260px)' : 'circle(0px)') }}>
                <span>Producto agregado</span>
                <Svg img="check" fill={vars.baseLight} width="2.125rem" height="2.125rem" />
            </div>
        </div>
    )
}

export default ProductDetail;