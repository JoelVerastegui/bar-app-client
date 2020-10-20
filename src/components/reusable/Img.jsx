import React, { useState } from 'react';
import styles from './Img.module.scss';
import Svg from './Svg';

const Img = ({ src, alt = "defaultImage" }) => {
    const [image, setImage] = useState(src);

    const hideLoading = (e) => {
        e.target.style.backgroundImage = '';
    }

    const showDefaultImage = () => {
        setImage(null);
    }

    return(
        <>
            { image ? (
                <img src={src} onLoad={hideLoading} onError={showDefaultImage} alt={alt} style={{ backgroundImage: "url('loading.svg')" }} />
            ) : (
                <div className={styles.defaultImg}><Svg img="notImage" /></div>
            ) }
        </>
    )
}

export default Img;