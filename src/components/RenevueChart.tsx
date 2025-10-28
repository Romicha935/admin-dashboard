import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const RevenueChart = () => {
  const revenueData = [
    { month: '01', revenue: 88 },
    { month: '03', revenue: 100 },
    { month: '06', revenue: 96 },
    { month: '09', revenue: 80 },
    { month: '12', revenue: 76 },
    { month: '15', revenue: 100 },
    { month: '18', revenue: 88 },
    { month: '21', revenue: 84 },
    { month: '24', revenue: 80 },
    { month: '27', revenue: 76 },
    { month: '30', revenue: 72 }
  ];

  const CustomBar = (props) => {
    const { x, y, width, height } = props;
    
    return (
      <g>
        <defs>
          <linearGradient id={`barGradient-${x}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="35%" stopColor="#a5b4fc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={`url(#barGradient-${x})`}
        />
      </g>
    );
  };

  return (
    <div className="w-full h-full bg-white p-6">
      <h3 className="text-xl font-semibold text-[#171C35] mb-6">Total Revenue</h3>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-xl font-semibold text-gray-800">25k</span>
        <span className="text-xs text-gray-400">Total Revenue in last month</span>
      </div>
      
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={revenueData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
          <CartesianGrid 
            strokeDasharray="0" 
            vertical={false} 
            stroke="#f3f4f6"
          />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            dy={8}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            ticks={[20, 40, 60, 80, 100]}
            tickFormatter={(value) => `${value}%`}
            domain={[0, 100]}
            dx={-5}
          />
          <Bar 
            dataKey="revenue" 
            shape={<CustomBar />}
            fill="#6366f1"
            maxBarSize={35}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;