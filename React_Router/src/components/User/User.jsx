import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const{userId} = useParams();
  return (
    <>
    <h1>User Id {userId}</h1>
    </>
  )
}
