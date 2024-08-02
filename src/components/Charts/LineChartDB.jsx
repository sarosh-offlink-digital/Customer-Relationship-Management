import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChartDB = ({ leadsDataDB, customerDataDB }) => {
    const [chartData, setChartData] = useState({
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Leads',
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: 'Customers',
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgb(54, 162, 235)',
            },
        ],
    });

    useEffect(() => {
        if (leadsDataDB && customerDataDB) {
            const leadsDayCounts = { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0, Saturday: 0, Sunday: 0 };
            const customersDayCounts = { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0, Saturday: 0, Sunday: 0 };

            const getDayOfWeek = dateStr => {
                const date = new Date(dateStr);
                return date.toLocaleString('en-US', { weekday: 'long' });
            };

            leadsDataDB.forEach(data => {
                const dayOfWeek = getDayOfWeek(data.contact_form_created_at);
                if (leadsDayCounts[dayOfWeek] !== undefined) {
                    leadsDayCounts[dayOfWeek] += 1;
                }
            });

            customerDataDB.forEach(data => {
                const dayOfWeek = getDayOfWeek(data.createdAt);
                if (customersDayCounts[dayOfWeek] !== undefined) {
                    customersDayCounts[dayOfWeek] += 1;
                }
            });

            const newChartData = {
                labels: Object.keys(leadsDayCounts),
                datasets: [
                    {
                        label: 'Leads',
                        data: Object.values(leadsDayCounts),
                        borderColor: 'rgb(75, 192, 192)',
                    },
                    {
                        label: 'Customers',
                        data: Object.values(customersDayCounts),
                        borderColor: 'rgb(54, 162, 235)',
                    },
                ],
            };

            setChartData(newChartData);
        }
    }, [leadsDataDB, customerDataDB]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white', 
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', 
                },
            },
            y: {
                ticks: {
                    color: 'white', 
                },
            },
        },
    };

    return (
        <div className="mx-auto max-w-lg md:max-w-xl lg:max-w-2xl">
            <div className="relative aspect-w-1 aspect-h-1">
                <Line options={options} data={chartData} />
            </div>
        </div>
    );
};

export default LineChartDB;
