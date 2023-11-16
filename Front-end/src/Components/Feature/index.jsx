import React from 'react';
import styles from './Feature.module.css';

function Feature({imgSrc, imgAlt, titre, description}) {
    return (
        <div className={styles.featureItem}>
            <img src={imgSrc} alt={imgAlt} className={styles.icon} />
            <h3 className={styles.title}>{titre}</h3>
            <p>
                {description}
            </p>
        </div>
    );
}

export default Feature;