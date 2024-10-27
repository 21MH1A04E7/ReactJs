import Profile from './Profile.tsx';
import Sidebar from './Sidebar.tsx';

interface DashboardProps{
    
}

function Dashboard({}:DashboardProps) {
  return (
    <div className='flex justify-between'>
        <Profile />
        <Sidebar />
    </div>
  )
}

export default Dashboard
