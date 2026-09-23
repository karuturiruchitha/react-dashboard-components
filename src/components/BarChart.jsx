import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend
);

const BarChart = ({ title, labels, data, color = '#1B4FD8' }) => {
  const chartData = {
    labels,
    datasets: [{
      label: title,
      data,
      backgroundColor: color,
      borderRadius: 6,
      borderSkipped: false
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: title,
        font: { size: 14, weight: '600' },
        color: '#0D1B2A'
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#F1F5F9' } }
    }
  };

  return (
    <div style={styles.container}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

const styles = {
  container: {
    background: '#ffffff',
    border: '1px solid #E2E8F0',
    borderRadius: '12px',
    padding: '20px'
  }
};

export default BarChart;
