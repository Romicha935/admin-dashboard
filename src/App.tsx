
import AdminDashboardLayout from './Admin/AdminDashboardLayout'
import StatsSection from './Admin/CustomerManagement/CustomerCards'
import DoctorDatabaseTable from './Admin/CustomerManagement/DoctorDatabase'
import './App.css'
// import Dashboard from './components/AdminDashboard'
// import DashboardCards from './components/Card'
// import Login from './components/Login'
// import DoclineSignup from './components/SignUp'

function App() {


  return (
    <>
     {/* <Login/>
     <DoclineSignup/> */}
     {/* <Dashboard/> */}
     {/* <DashboardCards/> */}
     <AdminDashboardLayout/>
     <div>
      <StatsSection/>
      <DoctorDatabaseTable/>
     </div>
 
    </>
  )
}

export default App
