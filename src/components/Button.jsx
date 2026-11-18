import React from 'react'

const Button = ({name}) => {
  return (
    <button className='bg-red-400 hover:cursor-pointer rounded-3xl border-none px-4 py-2 hover:bg-red-500 duration-300 text-white font-sans '>
        {name}
    </button>
      
    
  )
}

export default Button
