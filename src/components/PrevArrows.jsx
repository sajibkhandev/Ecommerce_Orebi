import React from 'react'
import LeftArrow from './icons/LeftArrow';

export default function PrevArrows({className,onClick}) {
  return (
    <div
    className={`${className} inline-block bg-five w-16 h-16 rounded-full flex justify-center items-center`}
    onClick={onClick}>
    <LeftArrow/>
  </div>
  )
}
