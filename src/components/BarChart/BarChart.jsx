import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";
import styles from "./BarChart.module.scss";

const BarChart = (props) => {

  const settings = {
    labels: props.data.map((category) => {
      return category.name;
    }),
    datasets: [
      {
        label: "Score Out of 10",
        data: props.data.map((category) => {
          return Number(category.score_out_of_10.toFixed(2));
        }),
        backgroundColor: props.data.map((category) => {
          return category.color;
        }),
      },
    ],
  };

  console.log(props.data);

  return (
    <>
      <Bar
        height={180}
        data={settings}
        options={{
          title: {
            display: true,
            text: "Categories",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </>
  );
};

export default BarChart;
