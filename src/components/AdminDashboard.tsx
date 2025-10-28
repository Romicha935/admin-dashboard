
import { ArrowRight } from 'lucide-react';
import RevenueChart from './RenevueChart';

export default function Dashboard() {
  

  const revenueData = [
    100, 85, 90, 75, 60, 85, 95, 80, 70, 90, 85, 75
  ];

  const doctors = [
    {
      name: 'William Brooks',
      id: 'Doctor ID: CURT-006',
      specialist: 'Cardiologist',
      date: '20-Jun-2025',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'William Brooks',
      id: 'Doctor ID: CURT-006',
      specialist: 'Cardiologist',
      date: '20-Jun-2025',
      avatar: 'https://i.pravatar.cc/150?img=13'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
     

     

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Total Revenue</h3>
          <div className="relative h-64">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
            </div>
            
            {/* Chart bars */}
            <div className="ml-12 h-full flex items-end justify-between gap-2">
              {revenueData.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600"
                    style={{ height: `${value}%` }}
                  ></div>
                </div>
              ))}
            </div>
            {/* <RevenueChart/> */}
            
            {/* X-axis labels */}
            <div className="ml-12 mt-2 flex justify-between text-xs text-gray-500">
              {['03', '06', '09', '12', '15', '18', '21', '24', '27', '30'].map((label, index) => (
                <span key={index} className="flex-1 text-center">{index % 3 === 0 ? label : ''}</span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs text-gray-600">25k</span>
            <span className="text-xs text-gray-500">Total Revenue last month</span>
          </div>
        </div>

      
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Voicebot Call Volume */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-2">AI Voicebot Call Volume</h3>
          <p className="text-xs text-gray-500 mb-6">Daily call volume trend (last 7 days)</p>
          
          <div className="relative h-48">
            {/* Y-axis */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
            </div>
            
            {/* Line Chart */}
            <div className="ml-12 h-full relative">
              <svg className="w-full h-full" viewBox="0 0 600 180" preserveAspectRatio="none">
                <path
                  d="M 0,120 Q 50,100 100,80 T 200,60 T 300,70 T 400,100 T 500,90 T 600,120"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                  className="transition-all"
                />
                <path
                  d="M 0,120 Q 50,100 100,80 T 200,60 T 300,70 T 400,100 T 500,90 T 600,120 L 600,180 L 0,180 Z"
                  fill="url(#gradient)"
                  opacity="0.2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Tooltip */}
              <div className="absolute top-8 left-1/4 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
                <p className="text-xs text-gray-500">12-Jan-2025 • Friday</p>
                <p className="text-sm font-bold text-gray-900">Calls - 105</p>
              </div>
            </div>
            
            {/* X-axis */}
            <div className="ml-12 mt-2 flex justify-between text-xs text-gray-500">
              <span>SUN</span>
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
            </div>
          </div>
        </div>

        {/* Recent Add Doctor */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Recent Add Doctor</h3>
          <p className="text-xs text-gray-500 mb-6">Last 7 days you have join 02 New Doctor</p>
          
          <div className="space-y-4">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-orange-50 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900">{doctor.name}</h4>
                    <p className="text-xs text-gray-600">{doctor.id}</p>
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <div>
                    <p className="text-gray-500 mb-1">Specialist</p>
                    <p className="font-medium text-gray-900">{doctor.specialist}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 mb-1">Joining Date</p>
                    <p className="font-medium text-gray-900">{doctor.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}