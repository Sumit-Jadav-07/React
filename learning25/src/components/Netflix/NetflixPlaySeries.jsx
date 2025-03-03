import React from 'react'
import { useParams } from 'react-router-dom'

const NetflixPlaySeries = () => {

  const id = useParams().id
  const name = useParams().name

  return (
    <div>
      <h1 className='text-2xl font-bold text-pink-700'>Play Series</h1>

      <p className='text-xl font-bold text-green-500'>You're watching series: {name}</p>
      <p className='text-xl font-bold text-green-500'>Series ID: {id}</p>
    </div>
  )
}

export default NetflixPlaySeries
