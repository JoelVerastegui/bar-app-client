import React from 'react';
import styles from './Zoom.module.scss';
import Img from './Img';

const Zoom = ({src, alt}) => {
    const handleMove = (e) => {
        const zoomer = e.currentTarget;

        const offsetX = e.nativeEvent.offsetX !== undefined ? e.nativeEvent.offsetX : e.touches[0].pageX;
        const offsetY = e.nativeEvent.offsetY !== undefined ? e.nativeEvent.offsetY : e.touches[0].pageY;

        const x = offsetX / zoomer.offsetWidth * 100;
        const y = offsetY / zoomer.offsetHeight * 100;

        zoomer.style.backgroundPosition = x + '% ' + y + '%';

        if(e.nativeEvent.offsetX === undefined) document.body.style.overflow = "hidden";
    }

    return(
        <figure className={styles.zoom} onMouseMove={handleMove} onTouchMove={handleMove} onTouchEnd={()=>document.body.style.overflow="auto"} style={{ backgroundImage: `url(${src})` }}>
            <Img src={src} alt={alt} />
        </figure>
    )
}

export default Zoom;