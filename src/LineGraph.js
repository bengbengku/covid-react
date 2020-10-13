import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    points: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  toolstips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          padding: 20,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          padding: 20,
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType = "cases") => {
    let chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }

    return chartData;
  };

function LineGraph() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, "cases");
          console.log(chartData);
          setData(chartData);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="lineGraph">
    {data?.length > 0 && (
      <Line
        options={options}
        data={{
          datasets: [
            {
              backgroundColor: "rgba(204, 16, 52, 0.21)",
              borderColor: "#CC1034",
              data: data,
            },
          ],
        }}
      />
    )}  
    </div>
  );
}

export default LineGraph;
