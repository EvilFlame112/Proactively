import React, { useState } from "react";
import styles from "./LifestylePillars.module.css";

type CardProps = {
  title: string;
  description: string;
  image: string;
  stat?: string;
  isFocused: boolean;
};

const Card: React.FC<CardProps> = ({ title, description, image, stat, isFocused }) => {
  return (
    <div className={`${styles.card} ${isFocused ? styles.focused : styles.dimmed}`}>
      <div className={styles.cardImageWrapper}>
        <img src={image} alt={title} className={styles.cardImage} />
        {stat && <div className={styles.cardStatOverlay}>{stat}</div>}
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
