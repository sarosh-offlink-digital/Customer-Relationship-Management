import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
)

const DoughnutChartData = {
    labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
    ],
    datasets: [
        {
            label: 'Converted Leads',
            data: [5, 4, 8, 4],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(98, 204, 170, 1)'
        },
        {
            label: 'Leads',
            data: [5, 10, 25, 30,],
            borderColor: 'rgb(50, 78, 168)',
            backgroundColor: 'rgba(36, 128, 98, 1)'
        },
    ]
}

const options = {};

const DoughnutChart = () => {
    return (
        <div style={{ height: '400px' }}>
            <Doughnut options={options} data={DoughnutChartData} />
        </div>
    )
}

export default DoughnutChart
