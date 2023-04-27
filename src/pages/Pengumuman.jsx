import React from 'react'
import banner from "../assets/banner.png"

const Pengumuman = () => {
  return (
    <div className='m-7'>
      <div className='mx-auto'>
        <h1 className='md:text-5xl text-xl font-bold text-center pb-3'>PENGUMUMAN</h1>
        <img src={banner} className='w-full h-full' />
      </div>
    </div>
  )
}

export default Pengumuman