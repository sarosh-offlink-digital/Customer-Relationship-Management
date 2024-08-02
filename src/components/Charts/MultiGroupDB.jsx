import React from 'react';
import ReactApexChart from 'react-apexcharts';

const colors = ['#00A100', '#128FD9', '#FFB200', '#FF0000']; // Replace with your color array

const MultiGroupDB = () => {
  const series = [
    {
      data: [21, 22, 10, 28, 16, 21, ],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: (chart, w, e) => {
          // console.log(chart, w, e)
        },
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ['Finished'],
        ['In Progress'],
        ['Overdue'],
        ['Not Started'],
        ['On Hold'],
        ['Canceled'],
      ],
      labels: {
        style: {
          colors: colors,
          fontSize: '12px',
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={200} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default MultiGroupDB;
