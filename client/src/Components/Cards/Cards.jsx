import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

const Cards = ({ sneakers }) => {
  return (
    <div className={styles.cards}>
      {sneakers?.map((e) => (
        <Card {...e} />
      ))}
    </div>
  );
};

export default Cards;
