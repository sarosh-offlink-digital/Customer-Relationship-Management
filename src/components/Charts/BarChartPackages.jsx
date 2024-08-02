import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChartPackages = ({ leadsDataDB }) => {
    const [chartData, setChartData] = useState({
        labels: ['Logo', 'Web Development', 'Branding', 'SEO', 'Social Media Marketing'],
        datasets: [
            {
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(222, 115, 53, 0.9)', 
                    'rgba(75, 192, 192, 0.9)', 
                    'rgba(255, 206, 86, 0.9)', 
                    'rgba(54, 162, 235, 0.9)', 
                    'rgba(153, 102, 255, 0.9)'
                ],
                borderColor: [
                    'rgb(222, 115, 53)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 206, 86)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1,
            },
        ],
    });

    useEffect(() => {
        if (leadsDataDB) {
            const leadsPackages = { 'Logo': 0, 'Web': 0, 'Branding': 0, 'SEO': 0, 'SMM': 0 };
            const packageMapping = {
                'logo package': 'Logo',
                'web package': 'Web',
                'branding package': 'Branding',
                'SEO': 'SEO',
                'SMM': 'SMM'
            };
            
            leadsDataDB.forEach(lead => {
                const packageName = packageMapping[lead.contact_form_service];
                if (packageName && leadsPackages.hasOwnProperty(packageName)) {
                    leadsPackages[packageName]++;
                }
            });


            const newChartData = {
                labels: Object.keys(leadsPackages),
                datasets: [
                    {
                        data: Object.values(leadsPackages),
                        backgroundColor: [
                            'rgba(222, 115, 53, 0.9)', 
                            'rgba(75, 192, 192, 0.9)', 
                            'rgba(255, 206, 86, 0.9)', 
                            'rgba(54, 162, 235, 0.9)', 
                            'rgba(153, 102, 255, 0.9)'
                        ],
                        borderColor: [
                            'rgb(222, 115, 53)',
                            'rgb(75, 192, 192)',
                            'rgb(255, 206, 86)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)'
                        ],
                        borderWidth: 1,
                    },
                ],
            };

            setChartData(newChartData);
        }
    }, [leadsDataDB]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hides the legend completely
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => tooltipItem.raw, // Customizes tooltip text
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

export default BarChartPackages;
