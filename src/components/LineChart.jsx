import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Filler, Legend
);

const LineChart = ({ title, labels, data, color = '#1B4FD8' }) => {
  const chartData = {
    labels,
    datasets: [{
      label: title,
      data,
      borderColor: color,
      backgroundColor: color + '20',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: color
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
      <Line data={chartData} options={options} />
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

export default LineChart;
