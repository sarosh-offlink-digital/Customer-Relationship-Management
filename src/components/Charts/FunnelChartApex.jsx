// FunnelChartComponent.js
import React from 'react';
import Chart from 'react-apexcharts';

const FunnelChartApex = () => {
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
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
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
      categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
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
      dropShadow: {
        enabled: true,
      },
      y: {
        title: {
          align: 'middle',
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
      data: [400, 300, 200, 100],
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

export default FunnelChartApex;
