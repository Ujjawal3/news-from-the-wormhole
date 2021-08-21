import React from 'react'
import nftwlogo from '../../assets/nftwlogo.png'

const Home = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-200 opacity-80">
      <div className="flex flex-row justify-center pt-32">
        <img src={nftwlogo} alt="logo image" />
      </div>
      <div className="flex flex-row justify-center text-indigo-900">
        <h1>Space Flight News and Blog Posts</h1>
      </div>
      <div className="flex flex-row justify-center text-indigo-900">
        <p>Powered by SpaceFlight News API</p>
      </div>
    </div>
  )
}

export default Home
