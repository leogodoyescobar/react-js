import { CartWidget } from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"


export const NavBar = () => {
    return (
        <>
        <nav className={`${styles.Border1}`}>
            <ul className={` ${styles.ulFlex}`}>
                <li><a href="" >Home</a></li>
                <li><a href="" >Perros</a></li>
                <li><a href="" >Gatos</a></li>
                <li><a href="" >Nosotros</a></li>
                <li><a href="" >Contacto</a></li>
                <CartWidget/>
            </ul>            
        </nav>
        </>
    )
}
