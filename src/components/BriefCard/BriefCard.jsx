import React from "react";
import styles from "./BriefCard.module.scss";

const BriefCard = (props) => {
  const categoryList = () => {

    const catList = props.categories.map((category) => {
      return <p style={{"color":category.color}} className={styles.catStyle}>{category.name}, {category.score_out_of_10.toFixed(2)}</p>
    })

    console.log("hi");
    return <div className={styles.catContainer}>{catList}</div>


  }
  

  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.fullName} />

      <div className={styles.information}>
        <div className={styles.location}>
          <h3>{props.fullName}</h3>
          <p>{props.continent}</p>
        </div>
        <div className={styles.stats}>
          <p><b>Population</b> {props.pop}</p>
          <p><b>City Score</b> {props.score.toFixed(1)}</p>
          <p><b>Latitude</b> {props.lat.toFixed(3)}</p>
          <p><b>Longitude</b> {props.lon.toFixed(3)}</p>
        </div>
        <p dangerouslySetInnerHTML={{__html: `${props.summary}`}}></p>
        {categoryList()}

      </div>

    </div>
  );
};

export default BriefCard;
