import React from 'react';
import ImagenCarrito from "../images/Carrito-0.png";
import styles from "./Cartwidget.module.css"

export const CartWidget = () => {
    return (
        <>
        <img src={ImagenCarrito} alt="Mi Imagen" className={`${styles.ImagenCarrito}`} />
        </>
    )
}

