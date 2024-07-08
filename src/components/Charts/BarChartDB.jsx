import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
}
    from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const BarChartData = {
    labels:[
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
    ],
    datasets:[
        {
            label: 'Converted Leads',
            data: [5,4,8,4,10],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(217, 152, 61, 1)'
        },
        {
            label: 'Leads',
            data: [5,10,25,30,100],
            borderColor: 'rgb(50, 78, 168)',
            backgroundColor: 'rgba(50, 78, 168, 1)'
        },
    ]
}
const options={
    responsive: true,
};
const BarChartDB = () => {
  return (
    <div>
       <div>
            <Bar options={options} data={BarChartData}/>
        </div>
    </div>
  )
}

export default BarChartDB
