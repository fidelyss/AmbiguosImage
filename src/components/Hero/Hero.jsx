import React, { useEffect } from "react";
import styles from './Hero.module.css'

export default function Hero() {
    useEffect(() => {
        // Supondo que você tenha uma div com o id "minhaDiv"
        var minhaDiv = document.querySelector(`.${styles.childChild}`);

        // Obtendo o tamanho da div
        var tamanhoDiv = minhaDiv.getBoundingClientRect();

        // Tamanho em pixels
        var largura = tamanhoDiv.width;
        var altura = tamanhoDiv.height;

        console.log("Largura da div: " + largura + "px");
        console.log("Altura da div: " + altura + "px");
    }, [])


    return (<>
        <section className={styles.container}>
            <div className={styles.child}>
                <div className={styles.childChild}> <div style={{ fontSize: '45px', backgroundColor: 'green' }}>0</div></div>
                <div className={styles.childChild}> <div style={{ fontSize: '45px', backgroundColor: 'blue' }}>0</div></div>
            </div>
            <div className={styles.test}>saasass</div>
        </section>
    </>);
}