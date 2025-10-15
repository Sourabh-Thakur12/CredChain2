import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Title
);

export default function StatsDashboard() {
  
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Certificates Issued",
        data: [124, 132, 98, 124, 134],
        backgroundColor: "rgba(59,130,246,0.6)",
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Yearly Certificates",
        data: [100, 124, 112, 124, 134, 150],
        borderColor: "rgba(99,102,241,0.8)",
        backgroundColor: "rgba(99,102,241,0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const pieData = {
    labels: ["Web Dev", "Data Science", "AI", "ML", "Cyber Security"],
    datasets: [
      {
        label: "Courses Issued",
        data: [120, 90, 60, 30, 50],
        backgroundColor: [
          "#3b82f6",
          "#6366f1",
          "#22c55e",
          "#eab308",
          "#ef4444",
        ],
      },
    ],
  };

  const doughnutData = {
    labels: ["Completed", "Pending", "In Progress"],
    datasets: [
      {
        label: "Project Status",
        data: [70, 20, 10],
        backgroundColor: ["#22c55e", "#facc15", "#3b82f6"],
      },
    ],
  };

  const radarData = {
    labels: ["HTML", "CSS", "JS", "React", "Node"],
    datasets: [
      {
        label: "Skill Levels",
        data: [90, 80, 85, 95, 88],
        backgroundColor: "rgba(34,197,94,0.3)",
        borderColor: "#22c55e",
      },
    ],
  };

  const polarData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Performance",
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "#3b82f6",
          "#6366f1",
          "#22c55e",
          "#eab308",
          "#ef4444",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { color: "#374151" } },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: "#6b7280" } },
      x: { ticks: { color: "#6b7280" } },
    },
  };

  return (
    <div className="min-h-screen  p-6">
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
         Stats Dashboard
      </h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-center mb-2 text-gray-700 font-medium">
            Coursewise Issued
          </h2>
          <Pie data={pieData} options={chartOptions} />
        </div>

        
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-center mb-2 text-gray-700 font-medium">
            Yearly Certificates Issued
          </h2>
          <Line data={lineData} options={chartOptions} />
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-center mb-2 text-gray-700 font-medium">
            Monthly Certificates Issued
          </h2>
          <Bar data={barData} options={chartOptions} />
        </div>

        
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-center mb-2 text-gray-700 font-medium">
            Project Status
          </h2>
          <Doughnut data={doughnutData} options={chartOptions} />
        </div>

       
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-center mb-2 text-gray-700 font-medium">
            Skill Radar
          </h2>
          <Radar data={radarData} options={chartOptions} />
        </div>

        
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-center mb-2 text-gray-700 font-medium">
            Performance Spread
          </h2>
          <PolarArea data={polarData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
