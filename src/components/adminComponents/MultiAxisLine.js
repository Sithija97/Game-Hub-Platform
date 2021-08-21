import React from "react";
import { Line } from "react-chartjs-2";

const DATA_COUNT = 150;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Cubic interpolation (monotone)",
      data: datapoints,
      borderColor: "#be2edd",
      fill: false,
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
    {
      label: "Cubic interpolation",
      data: datapoints,
      borderColor: "#5352ed",
      fill: false,
      tension: 0.4,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Cubic interpolation mode",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        suggestedMin: -10,
        suggestedMax: 200,
      },
    },
  },
};
const MultiAxisLine = () => (
  <>
    <Line data={data} options={config} />
  </>
);

export default MultiAxisLine;
