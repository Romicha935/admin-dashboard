import React from 'react'
import TopSection from './TopSection'
import CardHeader from './CardHeader'
import RevenueChart from '../components/RenevueChart'
import Customer from './Customer'

const AdminDashboardLayout = () => {
  return (
    <div className='flex flex-col items-center gap-20'>
        <div className='w-260px min-h-screen'>
            sidebar
        </div>
        <div className=''>
            <TopSection/>
        </div>
        <div>
            <CardHeader/>
        </div>
        <div className='flex items-center gap-4 w-full'>
            <RevenueChart/>
            <Customer/>
        </div>
    </div>
  )
}

export default AdminDashboardLayout