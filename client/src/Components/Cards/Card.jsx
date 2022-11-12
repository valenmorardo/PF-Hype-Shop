import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, pictures, price }) => {
  return (
    <div>
      <div className={styles.container}>
        <h3>{title}</h3>
        <img className={styles.image} src={pictures} alt="not image" width="40%" height="40%"></img>
        <h3>$ {price}</h3>
      </div>
    </div>
  );
};

export default Card;
