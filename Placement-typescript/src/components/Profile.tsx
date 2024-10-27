
import {User} from '../hooks/UseContextHook'
import { useDashboardContext } from '../context/context'

interface ProfileProps {
   
}
function Profile({}:ProfileProps) {
    const user:User=useDashboardContext()
  return (
    <div className='bg-slate-400 p-10 text-lg'>
        <h1>Profile Page</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>id : {user.id}</p>
  
    </div>
  )
}

export default Profile