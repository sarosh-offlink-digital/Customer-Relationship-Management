import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
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

const BarChartDB = ({ leadsDataDB, customerDataDB }) => {
    const [chartData, setChartData] = useState({
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Leads',
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(255, 187, 31, 0.8)', // Change the color for Leads
                borderColor: 'rgb(222, 115, 53)',
                borderWidth: 1,
            },
            {
                label: 'Customers',
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(44, 178, 255, 0.8)', // Change the color for Customers
                borderColor: 'rgb(51, 42, 150)',
                borderWidth: 1,
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
                const dayOfWeek = getDayOfWeek(data.createdAt); // Ensure the correct property is used for customerDataDB
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
                        backgroundColor: 'rgba(255, 187, 31, 0.8)', // Change the color for Leads
                        borderColor: 'rgb(222, 115, 53)',
                        borderWidth: 1,
                    },
                    {
                        label: 'Customers',
                        data: Object.values(customersDayCounts),
                        backgroundColor: 'rgba(44, 178, 255, 0.8)', // Change the color for Customers
                        borderColor: 'rgb(51, 42, 150)',
                        borderWidth: 1,
                    },
                ],
            };

            setChartData(newChartData);
        }
    }, [leadsDataDB, customerDataDB]);

    const options = {
        responsive: true,
        indexAxis: 'y', // Use 'y' axis for bar chart
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white', 
                },
            },

            // title: {
            //     display: true,
            //     text: 'Leads and Customers Count',
            // },
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
                <Bar options={options} data={chartData} />
            </div>
        </div>
    );
};

export default BarChartDB;
