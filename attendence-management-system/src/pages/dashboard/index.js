import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles
import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js'; // Required imports for chart.js

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dashboard = () => {
  const totalEmployees = 100;
  const progress = (totalEmployees / 200) * 100; // Example percentage

  // Example chart data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Employees',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Employees per Month',
      },
    },
  };

  return (
    <div className="absolute top-0 left-0 z-10 flex flex-col w-screen h-screen items-center">
      <div className="flex flex-row mt-10 w-full md:w-2/3 lg:w-1/2 justify-center space-x-8">
        <div className="flex flex-col items-center w-full md:w-1/3 bg-gradient-to-r from-black to-red-700 p-10 rounded-lg">
          <div className="w-32 h-32 mb-4">
            <CircularProgressbar
              value={progress}
              text={`${totalEmployees}`}
              styles={{
                path: {
                  stroke: `rgba(62, 152, 199, ${progress / 100})`,
                  strokeLinecap: 'round',
                },
                text: {
                  fill: '#fff',
                  fontSize: '24px',
                },
                trail: {
                  stroke: '#d6d6d6',
                },
              }}
            />
          </div>
          <p className="text-xl font-semibold text-gray-200">Total</p>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/3 bg-gradient-to-r from-black to-red-700 p-10 rounded-lg">
          <div className="w-32 h-32 mb-4">
            <CircularProgressbar
              value={progress}
              text={`${totalEmployees}`}
              styles={{
                path: {
                  stroke: `rgba(62, 152, 199, ${progress / 100})`,
                  strokeLinecap: 'round',
                },
                text: {
                  fill: '#fff',
                  fontSize: '24px',
                },
                trail: {
                  stroke: '#d6d6d6',
                },
              }}
            />
          </div>
          <p className="text-xl font-semibold text-gray-200">Present</p>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/3 bg-gradient-to-r from-black to-red-700 p-10 rounded-lg">
          <div className="w-32 h-32 mb-4">
            <CircularProgressbar
              value={progress}
              text={`${totalEmployees}`}
              styles={{
                path: {
                  stroke: `rgba(62, 152, 199, ${progress / 100})`,
                  strokeLinecap: 'round',
                },
                text: {
                  fill: '#fff',
                  fontSize: '24px',
                },
                trail: {
                  stroke: '#d6d6d6',
                },
              }}
            />
          </div>
          <p className="text-xl font-semibold text-gray-200">Absent</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-10 w-full md:w-2/3 lg:w-1/2">
        <div className="bg-black p-10 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Employee Data</h2>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
