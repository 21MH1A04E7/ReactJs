import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom' 
function Github() {
//    const [data,setData]=useState([])
//    useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api.github.com/users/21MH1A04E7');
//                 setData(response.data)
//                 console.log(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

const data=useLoaderData()
  return (
    <div className='w-full h-auto'>
        <div className='bg- flex'>
            <div className=' '>
                <img src={data.avatar_url}  alt="githubpic" whdth={300}/>
            </div>
            <div className='flex flex-wrap flex-col py-3  pl-5 w-96 bg-slate-100 justify-center items-center w-full'>
                <h1 className='font-bold text-xl text-black'>Name  {data.name}</h1>
                <p className='font-bold text-xl text-black'>Followers  {data.followers}</p>
            </div>
        </div>
    </div>
  )
}

export default Github
export const githubInfoLoader=async ()=>{
    try {
        const response = await axios.get('https://api.github.com/users/21MH1A04E7');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}