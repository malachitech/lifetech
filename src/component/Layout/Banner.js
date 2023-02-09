import React from 'react'

function Banner() {
  return (
    <div className='w-full bg-sky-300 relative md:flex md:justify-start md:items-center'>
      <img 
        src='https://media.istockphoto.com/id/1344437198/photo/top-view-photo-of-black-headphones-with-microphone-on-white-keyboard-and-flowerpot-on.jpg?s=612x612&w=0&k=20&c=PeziJ4u0QOXuateMG08XLp3VtZCdOKm73W5hUKn5on4='
        alt='bg'
        className='w-full md:w-1/2 h-full shadow-xl'
      />

      <h2 className='absolute md:relative top-1/2 text-4xl sm:text-5xl lg:text-7xl text-blue-900 ml-14 lg:ml-24'>
        Portfolio
        <p className='text-2xl lg:text-4xl font-bold'>Our Impressive Milestone</p>
      </h2>
  </div>
  )
}

export default Banner