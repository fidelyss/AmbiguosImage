import React from "react";
import { useState, useEffect } from "react";
import styles from './Navbar.module.css';

export default function Navbar() {
    const [model, setModel] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setModel(true)
            } else {
                setModel(false)
            }
        })
    }, [])
    return (<>
        <nav className={`${styles.navbar} ${model ? '' : styles.navHide}`}>
            <div className={styles.image}>
            </div>
            <div className={styles.sobre}>
                <a>Sobre</a>
            </div>
        </nav>
    </>);
}