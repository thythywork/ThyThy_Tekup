import React from 'react'

const Card = ({img, title}) => {
  return (
    <div className='bg-[#F4F4F4] relative flex flex-col items-center justify-center shadow-md shadow-gray-300 rounded-lg'>
        <img className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]' src={img} alt="" />
        <button className='bg-white rounded-md absolute py-3 px-6 bottom-3 shadow-lg shadow-gray-300'>{title}    <span>&#10095;</span></button>
    </div>
  )
}

export default Card
