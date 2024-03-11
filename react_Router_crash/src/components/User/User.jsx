import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {id} = useParams()
    return (
        <div className='bg-black-400 w-full h-24 flex justify-center items-center rounded text-center'>
            <h1  className='text-red-500 text-3xl'>User {id}</h1>
        </div>
    )
}

export default User