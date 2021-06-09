import React from "react";
import styles from "./BriefCard.module.scss";

const BriefCard = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.fullName} />

      <div className={styles.information}>
        <div className={styles.location}>
          <h3>{props.fullName}</h3>
          <p>{props.continent}</p>
        </div>
        <div className={styles.stats}>
          <p>Population: {props.pop}</p>
          <p>Overall City Score: {props.score.toFixed(1)}</p>
          <p>Latitude: {props.lat.toFixed(3)}</p>
          <p>Longitude: {props.lon.toFixed(3)}</p>
        </div>
        <p dangerouslySetInnerHTML={{__html: `${props.summary}`}}></p>
      </div>

    </div>
  );
};

export default BriefCard;
