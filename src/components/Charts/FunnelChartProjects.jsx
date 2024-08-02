// FunnelChartComponent.js
import React from 'react';
import Chart from 'react-apexcharts';

const FunnelChartProjects = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 400,
      toolbar: {
        show: false, //to download
      },
      
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '100%',
        distributed: true,
        dataLabels: {
          position: 'bottom',
        },
      },
    },
    colors: ['#0BCD84', '#20B9C8', '#BF1129', '#F2703C', '#6E6768', '#DE195B'],
    dataLabels: {
      enabled: true,
      textAnchor: 'center',
      style: {
        colors: ['#fff'],
        fontWeight: '100',
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#ffffff'],
    },
    xaxis: {
      categories: ['Finished', 'In Progress', 'Overdue', 'Not Started', 'On Hold', 'Canceled'],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
    },
  };

  const chartSeries = [
    {
      name: 'Value',
      data: [800, 700, 600, 500, 400, 300],
    },
  ];

  return (
    <div className='px-4'>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={400}
      />
    </div>
  );
};

export default FunnelChartProjects;
