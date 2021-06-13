import React from "react";
import styles from "./BriefCard.module.scss";
import BarChart from "../BarChart";

const BriefCard = (props) => {

  // const categoryList = () => {
  //   const catList = props.categories.map((category) => {
  //     return <p style={{"color":category.color}} className={styles.catStyle}>{category.name}, {category.score_out_of_10.toFixed(2)}</p>
  //   })

  //   return <div className={styles.catContainer}>{catList}</div>
  // }

  // format population from number into string with commas for readability
  let formattedPop = "";
  if (String(props.pop).length > 3) {
    formattedPop = props.pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    formattedPop = String(props.pop);
  }


  // remove unnecessary info from the summary from the end of the summary
  const summaryArray = props.summary.split("\n\n\n");
  let formattedSummary = "";
  if (summaryArray.length > 1) {
    for (let i = 0; i < summaryArray.length-1; i++) {
      formattedSummary += summaryArray[i];
    }
  } else {
    formattedSummary = props.summary;
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
          <p><b>Population</b> {formattedPop}</p>
          <p><b>City Score</b> {props.score.toFixed(1)}</p>
          <p><b>Latitude</b> {props.lat.toFixed(3)}</p>
          <p><b>Longitude</b> {props.lon.toFixed(3)}</p>
        </div>

        <p dangerouslySetInnerHTML={{__html: `${formattedSummary}`}}></p>
        
        <div className={styles.categoriesHead}>
          <h2>Categories <span>Higher is better!</span></h2>
        </div>
        <BarChart data={props.categories.slice(0, 9)} title="Categories" />
        <BarChart data={props.categories.slice(9)} title="Categories" />

        {/* <div className={styles.categories}>
          {categoryList()}
        </div> */}

      </div>

    </div>
  );
};

export default BriefCard;
