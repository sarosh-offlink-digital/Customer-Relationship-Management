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
        'Data 1',
        'Data 2',
        'Data 3',
    ],
    datasets: [
        {
            label: 'Leads',
            data: [5, 10, 25],
            backgroundColor: [
                'rgba(227, 225, 225, 1)',
                'rgba(87, 189, 138, 1)',  
                'rgba(36, 128, 98, 1)',
            ],
        },
    ]
}

const options = {};

const DoughnutChart = () => {
    return (
        <div className="mx-auto" style={{ maxWidth: '210px' }}> {/* Adjust maxWidth to desired size */}
            <div className="relative" > {/* Maintain aspect ratio */}
                <Doughnut options={options} data={DoughnutChartData} />
            </div>
        </div>
    )
}

export default DoughnutChart
