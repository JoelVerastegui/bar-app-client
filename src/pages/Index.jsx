import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CoverPage from '../components/index/CoverPage';

const DrinksGrid = lazy(() => import('../components/index/DrinksGrid'));

const Loading = () => <span>Loading...</span>;

const Index = () => {
    const drinks = useSelector(store => store.drink.products);
    const [products, setProducts] = useState(drinks);

    // const fetchProducts = async () => {
    //     const res = await fetch(`${process.env.REACT_APP_SERVER}/product`);

    //     if(res.ok) {
    //         const json = await res.json();
    //         setProducts(json.data);
    //     } else{
    //         console.log(`Status: ${res.status}, Message: ${res.statusText}`);
    //     }
    // }

    // useEffect(() => {
        
    //     if(drinks.length === 0) {
    //         fetchProducts();
    //     } else{
    //         setProducts(drinks);
    //     }
    // }, [])

    return(
        <>
            <CoverPage />
            <Suspense fallback={<Loading />}>
                <DrinksGrid drinks={products} />
            </Suspense>
        </>
    )
}

export default Index;