import React from 'react'

const Testimonial = (props) => {
  return (
    <div className='bg-[#E2625A] text-black w-full max-sm:w-[80%] max-sm:h-[50%]  min-h-[40vh] border-2 border-white rounded-2xl flex flex-col items-center py-4 sm:py-6 px-4 sm:px-10 gap-y-3'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>{props.title}</h1>
      <hr className='w-full' />
      <p className='text-base sm:text-lg md:text-xl text-center'>{props.description}</p>
    </div>
  )
}

export default Testimonial