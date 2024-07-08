import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
}
    from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const LineChartData = {
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
        },
        {
            label: 'Leads',
            data: [5,10,25,30,100],
            borderColor: 'rgb(50, 78, 168)',
        },
    ]
}
const LineChartDB = () => {

    const options={
        responsive: true,
    };


    return (
        <div>
            <Line options={options} data={LineChartData}/>
        </div>
    )
}

export default LineChartDB
