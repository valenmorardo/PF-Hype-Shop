import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import {Link} from 'react-router-dom'

const Cards = ({ sneakers }) => {
  return (
    <div className={styles.cards}>
      {sneakers?.map((e) => (
        <Link to={`/sneaker/${e.id}`}>
        <Card {...e} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
