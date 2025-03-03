import React, { useEffect } from "react";
import styles from './Coments.module.css'
export default function Coments() {
    return (<>
        <section className={`${styles.container}`}>
            <div className={styles.child}>
                <div className={styles.childChild}> <div style={{ fontSize: '45px', backgroundColor: 'green' }}>0</div></div>
                <div className={styles.childChild}> <div style={{ fontSize: '45px', backgroundColor: 'blue' }}>0</div></div>
            </div>
        </section>
    </>);
}