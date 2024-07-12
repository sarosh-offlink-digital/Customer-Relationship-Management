import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Legend,
    Title,
    Tooltip,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Legend,
    Title,
    Tooltip,
);

const DoughnutChartData = {
    labels: ['Payment Paid', 'Payment Unpaid'],
    datasets: [
        {
            label: 'Customers',
            data: [15, 4],
            backgroundColor: [
                'rgba(103, 65, 209, 1)',
                'rgba(227, 225, 225, 1)',
            ],
        },
    ],
};

const options = {
    plugins: {
        legend: {
            position: 'bottom',
            align: 'start',
        },
    },
};

const PieChartDB = () => {
    return (
        <div className="mx-auto max-w-lg md:max-w-xl lg:max-w-2xl">
            <div className="relative aspect-w-1 aspect-h-1">
                <Pie options={options} data={DoughnutChartData} />
            </div>
        </div>
    );
};

export default PieChartDB;
