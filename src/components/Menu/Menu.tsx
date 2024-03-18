import styles from './Menu.module.css'
import Hamburger from '../../assets/hamburger'
import IconClose from '../../assets/close';
import { useState } from 'react'

export default function Menu() {

    const [isActive, setIsActive] = useState(false);
    
    const toggleActive = () => {
        setIsActive(!isActive);
    }

    const removeActive = () => {
        setIsActive(false);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src="./src/assets/logo.png" />
            </div>
            <ul className={`${styles.menuNavbar} ${isActive ? styles.active : ''}`} >
                <div className={styles.closeModal}>
                    <div className={styles.closeBtn} onClick={removeActive}>
                        <IconClose />
                    </div>
                </div>
                <li onClick={removeActive}>Início</li>
                <li onClick={removeActive}>Sobre</li>
                <li onClick={removeActive}>Informações</li>
                <li onClick={removeActive}>Contato</li>
            </ul>
            <div className={styles.hamburger + ` ${isActive ? styles.active : ''}`} onClick={toggleActive}>
                <Hamburger />
            </div>
        </nav>
    )
}