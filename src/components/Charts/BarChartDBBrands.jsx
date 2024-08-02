import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChartDBBrands = () => {
  const [series] = useState([453, 0]);
  const [options] = useState({
    chart: {
      type: 'donut',
    },
    labels: ['Captain Design Agency', 'Captain Book Publishing'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%' // Increase this value to make the donut larger
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 400,
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  });

  return (
    <div className="w-[550px] h-[335px]">
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChartDBBrands;
