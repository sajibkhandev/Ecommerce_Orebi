import React from 'react'

export default function Container({children}) {
  return (
    <div className='mx-auto max-w-container bg-red-500'>
        {children}
    </div>
  )
}
