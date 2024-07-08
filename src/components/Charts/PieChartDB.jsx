import React from 'react'
import { Pie } from 'react-chartjs-2'
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
        'Payment Paid',
        'Payment Unpaid',
        
    ],
    datasets: [
        {
            label: 'Customers',
            data: [15, 4,],
            backgroundColor: [
                'rgba(151, 75, 201, 1)',
                'rgba(227, 225, 225, 1)',  
            ],
            
            
        },
    ]
}

const options = {};
const PieChartDB = () => {
  return (
    <div>
      <div style={{ height: '400px' }}>
            <Pie options={options} data={DoughnutChartData} />
        </div>
    </div>
  )
}

export default PieChartDB
