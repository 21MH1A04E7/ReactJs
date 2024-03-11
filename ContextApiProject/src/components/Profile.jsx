import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return <div className='bg-slate-600 w-1/2 h-10 flex justify-center items-center font-semibold text-xl'>please login</div>
    return <div className='bg-slate-600 w-1/2 h-10 flex justify-center items-center font-semibold text-xl'>Welcome {user.username}</div>
}

export default Profile