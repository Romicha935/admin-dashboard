import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

// Sample data for the chart - matching the image
const callVolumeData = [
  { day: 'SUN', calls: 60, date: '' },
  { day: 'MON', calls: 75, date: '' },
  { day: 'TUE', calls: 80, date: '12-Jan-2025 • Friday', highlighted: true },
  { day: 'WED', calls: 40, date: '' },
  { day: 'THU', calls: 45, date: '' },
  { day: 'FRI', calls: 50, date: '' },
  { day: 'SAT', calls: 65, date: '' },
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
    id: 'CUST-001',
    name: 'William Brooks',
    specialist: 'Cardiologist',
    joiningDate: '20-Jun-2025',
  }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload[0]) {
    const data = payload[0].payload;
    if (data.highlighted) {
      return (
        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
          <p className="text-xs text-gray-500 mb-1">12-Jan-2025 • Friday</p>
          <p className="text-sm font-semibold text-blue-600">Calls - 105</p>
        </div>
      );
    }
  }
  return null;
};

const VoicebotDashboard: React.FC = () => {
  return (
    <div className="bg-white p-6 w-full">
      <div className=" p-6">
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

            <div className="relative" style={{ height: '280px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={callVolumeData}
                  margin={{ top: 20, right: 20, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="0" stroke="#f0f0f0" vertical={false} />
                  
                  {/* Reference lines for percentage marks */}
                  <ReferenceLine y={20} stroke="#f0f0f0" strokeDasharray="0" />
                  <ReferenceLine y={40} stroke="#f0f0f0" strokeDasharray="0" />
                  <ReferenceLine y={60} stroke="#f0f0f0" strokeDasharray="0" />
                  <ReferenceLine y={80} stroke="#f0f0f0" strokeDasharray="0" />
                  <ReferenceLine y={100} stroke="#f0f0f0" strokeDasharray="0" />
                  
                  {/* Vertical line at TUE */}
                  <ReferenceLine x="TUE" stroke="#d1d5db" strokeDasharray="3 3" />
                  
                  <XAxis 
                    dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 11, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 11 }}
                    ticks={[0, 20, 40, 60, 80, 100]}
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  
                  <Tooltip content={<CustomTooltip />} cursor={false} />
                  
                  <Line 
                    type="monotone" 
                    dataKey="calls" 
                    stroke="#8b9cf6" 
                    strokeWidth={2.5}
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      if (payload.highlighted) {
                        return (
                          <circle 
                            cx={cx} 
                            cy={cy} 
                            r={6} 
                            fill="#6366f1" 
                            stroke="white" 
                            strokeWidth={2}
                          />
                        );
                      }
                      return <circle cx={cx} cy={cy} r={0} />;
                    }}
                    activeDot={false}
                  />
                  
                  {/* Shaded area under curve */}
                  <defs>
                    <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c7d2fe" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#c7d2fe" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <Line 
                    type="monotone" 
                    dataKey="calls" 
                    stroke="url(#colorCalls)" 
                    strokeWidth={0}
                    fill="url(#colorCalls)"
                    dot={false}
                  />
                </LineChart>
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
                Last 7 days you have join 02 New Doctor.
              </p>
            </div>

            <div className="space-y-3">
              {recentDoctors.map((doctor, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-3"
                >
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