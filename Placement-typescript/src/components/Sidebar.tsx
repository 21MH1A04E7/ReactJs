import { useDashboardContext } from '../context/context'
import {User} from '../hooks/UseContextHook'

interface SidebarProps{
    
}
function Sidebar({}:SidebarProps) {
    const user:User=useDashboardContext()
  return (
    <div className='w-full bg-blue-200 italic text-lg'>
        <h1>{user.name}</h1>
        <h1>Age of User : {user.age}</h1>
    </div>
  )
}

export default Sidebar