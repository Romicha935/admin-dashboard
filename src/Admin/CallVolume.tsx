import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Sample data for the chart
const callVolumeData = [
  { day: 'SUN', calls: 60 },
  { day: 'MON', calls: 75 },
  { day: 'TUE', calls: 105, date: '12-Jan-2025 • Friday', highlighted: true },
  { day: 'WED', calls: 40 },
  { day: 'THU', calls: 45 },
  { day: 'FRI', calls: 50 },
  { day: 'SAT', calls: 65 },
];

// Recent doctors data
const recentDoctors = [
  {
    id: 'CUST-001',
    name: 'William Brooks',
    specialist: 'Cardiologist',
    joiningDate: '20-Jun-2025',
  },
  {
    id: 'CUST-002',
    name: 'Sophia Turner',
    specialist: 'Dermatologist',
    joiningDate: '22-Jun-2025',
  },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload[0]) {
    const data = payload[0].payload;
    if (data.highlighted) {
      return (
        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
          <p className="text-xs text-gray-500 mb-1">{data.date}</p>
          <p className="text-sm font-semibold text-blue-600">Calls - {data.calls}</p>
        </div>
      );
    }
  }
  return null;
};

const VoicebotDashboard: React.FC = () => {
  return (
    <div className="bg-white p-6 w-full">
      <div className="p-6">
        <div className="flex gap-6">
          {/* Left Section - Chart */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-0">
                AI Voicebot Call Volume
              </h2>
              <p className="text-xs text-gray-500">
                Daily call volume trend (last 7 days)
              </p>
            </div>

            <div className="relative" style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={callVolumeData}
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    width={40}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="calls"
                    stroke="#2dd4bf"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Section - Recent Doctors */}
          <div style={{ width: '280px' }}>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-0">
                Recent Add Doctor
              </h2>
              <p className="text-xs text-gray-500">
                Last 7 days you have joined 02 new doctors.
              </p>
            </div>

            <div className="space-y-3">
              {recentDoctors.map((doctor, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-3">
                  <div className="flex gap-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        Doctor ID: {doctor.id}
                      </p>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Specialist</span>
                          <span className="text-gray-500">Joining Date</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-gray-900">{doctor.specialist}</span>
                          <span className="font-medium text-gray-900">{doctor.joiningDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoicebotDashboard;
