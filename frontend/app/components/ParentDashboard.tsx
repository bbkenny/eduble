"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const gradeData = [
  { month: "Aug", math: 85, english: 78, science: 92 },
  { month: "Sep", math: 88, english: 82, science: 90 },
  { month: "Oct", math: 92, english: 85, science: 94 },
  { month: "Nov", math: 94, english: 88, science: 96 },
  { month: "Dec", math: 96, english: 91, science: 97 },
];

const attendanceData = [
  { name: "Present", value: 45, fill: "#98FF98" },
  { name: "Absent", value: 3, fill: "#ff6b6b" },
  { name: "Late", value: 2, fill: "#ffa500" },
];

const behaviorData = [
  { category: "Participation", score: 92 },
  { category: "Conduct", score: 88 },
  { category: "Teamwork", score: 90 },
  { category: "Punctuality", score: 85 },
];

export function ParentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-eduble-light to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-eduble-slate mb-2">
            Welcome Back, Parent
          </h1>
          <p className="text-gray-600">
            Monitor your child&apos;s academic progress in real-time
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-eduble-mint">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">
              Current GPA
            </h3>
            <p className="text-3xl font-bold text-eduble-slate">3.85</p>
            <p className="text-green-600 text-sm mt-2">↑ 0.15 this term</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-eduble-mint">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">
              Attendance
            </h3>
            <p className="text-3xl font-bold text-eduble-slate">94%</p>
            <p className="text-gray-600 text-sm mt-2">45/50 days present</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-eduble-mint">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">
              Avg Score
            </h3>
            <p className="text-3xl font-bold text-eduble-slate">91</p>
            <p className="text-green-600 text-sm mt-2">Excellent performance</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-eduble-mint">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">
              Behavior
            </h3>
            <p className="text-3xl font-bold text-eduble-slate">Good</p>
            <p className="text-blue-600 text-sm mt-2">
              Positive feedback from teachers
            </p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Grade Trends */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-eduble-slate mb-4">
              Grade Trends
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={gradeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="math"
                  stroke="#98FF98"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="english"
                  stroke="#334155"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="science"
                  stroke="#64b5f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Attendance Breakdown */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-eduble-slate mb-4">
              Attendance Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={attendanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {attendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Behavior Assessment */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-eduble-slate mb-4">
              Behavioral Assessment
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={behaviorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="category" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                />
                <Bar dataKey="score" fill="#98FF98" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-eduble-slate mb-4">
            Recent Updates
          </h2>
          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-eduble-mint p-4 bg-gradient-to-r from-eduble-mint/5 to-transparent rounded">
              <div className="flex-1">
                <h3 className="font-semibold text-eduble-slate">
                  Math Test Score: 96%
                </h3>
                <p className="text-gray-600 text-sm">
                  Excellent performance on algebra unit
                </p>
                <p className="text-gray-500 text-xs mt-1">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start border-l-4 border-blue-400 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded">
              <div className="flex-1">
                <h3 className="font-semibold text-eduble-slate">
                  Perfect Attendance Week
                </h3>
                <p className="text-gray-600 text-sm">
                  5/5 days present this week
                </p>
                <p className="text-gray-500 text-xs mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
