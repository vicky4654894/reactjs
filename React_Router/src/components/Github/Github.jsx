import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {

const data = useLoaderData();

  return (
    <>
    <div className="m-4 container">
    <a
  href="#"
  className="h-screen flex items-center justify-center  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <img
    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
    src={data.avatar_url}
    alt="Profile Image"
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {data.login}
    </h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {data.following}
    </p>
  </div>
</a>
</div>  
    </>
  )
}
export const  getGithubData=  async()=>{
    const res = await fetch('https://api.github.com/users/vicky4654894');
    const data = res.json();
    return data;
    
}
