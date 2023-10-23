import { CartWidget } from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"


export const NavBar = () => {
    return (
        <>
        <nav className={`${styles.Border1}`}>
            <ul className={` ${styles.ulFlex}`}>
                <li><a href="" >Home</a></li>
                <li>Perros</li>
                <li>Gatos</li>
                <li>Nosotros</li>
                <li>Contacto</li>
                <CartWidget/>
            </ul>            
        </nav>
        </>
    )
}
