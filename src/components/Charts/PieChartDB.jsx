import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChartDB = () => {
  const series = [
    {
      name: 'Sales Target',
      group: 'budget',
      data: [44000, 55000, 41000, 67000, 22000]
    },
    
    {
      name: 'Reached',
      group: 'budget',
      data: [13000, 36000, 20000, 8000, 13000]
    },
   
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    dataLabels: {
      formatter: (val) => {
        return val / 1000 + 'K';
      },
      style: {
        colors: ['#fff'] // White color for data labels
      }
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'March',
        'April',
        'May'
      ],
      labels: {
        formatter: (val) => {
          return val / 1000 + 'K';
        },
        style: {
          colors: '#fff' // White color for x-axis labels
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#fff' // White color for y-axis labels
        }
      }
    },
    fill: {
      opacity: 1,
    },
    colors: ['#43ff64d9', '#ff8d00cc', '#80f1cb', '#00E396'],
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      labels: {
        colors: '#fff' // White color for legend labels
      }
    }
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={415} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChartDB;
