import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadarElement, Tooltip, Legend, Title } from 'chart.js';

// Register the necessary components of Chart.js
ChartJS.register(RadarElement, Tooltip, Legend, Title);

const SpecializedKnowledgeRadialChart = () => {
  const data = {
    labels: [
      'Java', 'Python', 'Lua', 'C++', 'R', 'SQL', 'Dart', 'Rust', 'JavaScript', 'HTML/CSS'
    ],
    datasets: [
      {
        label: 'Programming Languages',
        data: [90, 85, 80, 75, 70, 80, 65, 85, 90, 80],  // Example proficiency data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Light teal for background
        borderColor: 'rgba(75, 192, 192, 1)',  // Teal for the border
        borderWidth: 1,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',  // Points also in teal
        pointBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,  // Maximum proficiency level
        stepSize: 20,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Specialized Knowledge',
      },
    },
  };

  return (
    <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-border">
      <h3 className="text-xl font-semibold mb-6 text-olive">Specialized Knowledge</h3>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SpecializedKnowledgeRadialChart;
