import React from 'react'
import Two from './icons/Two';
import Flex from './Flex';
import Car from './icons/Car';
import Refres from './icons/Refres';

export default function Facillity() {
  return (
    <Flex className="gap-x-4">
        <Two/>
        <p className='text-third text-base font-dm font-normal'>Two years warranty</p>
    </Flex>
  )
}
