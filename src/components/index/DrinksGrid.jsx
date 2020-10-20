import React from 'react';
import styles from './DrinksGrid.module.scss';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import DrinkCard from './DrinkCard';

const DrinksGrid = ({drinks}) => {
    // console.log(drinks);
    // const drinks = useSelector(store => store.drink.products);

    return (
        <div id="drinksGrid" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.grid}>
                    {
                        drinks && drinks.length !== 0 && drinks.map((f,i) => (
                            <Link key={i} to={"/product/" + f.id}>
                                <DrinkCard img={f.img[0]} name={f.name} price={f.price.toFixed(2)} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DrinksGrid;