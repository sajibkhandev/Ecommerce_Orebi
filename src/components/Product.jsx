import React from 'react'

import Image from './Image'
import Badge from './Badge'
import ProtionHeading from './ProtionHeading'
import Flex from './Flex'

import { AiFillHeart } from 'react-icons/ai';
import { HiOutlineRefresh } from 'react-icons/hi';
import { BsFillCartDashFill } from 'react-icons/bs';


export default function Product({src}) {
  return (
    <div className='mx-2.5'>
        <div className='relative overflow-hidden group'>
        <Image src={src} className='w-full'/>
        <Badge text='New'/>
        <div className='bg-four p-6 absolute left-0 -bottom-40 w-full group-hover:bottom-0 duration-500'>
            <Flex className='justify-end items-center gap-x-4'>
            <p className='text-base text-secondary font-base font-normal hover:text-primary hover:font-bold duration-300 cursor-pointer'>Add to Wish List</p>
            <AiFillHeart/>
            </Flex>
            <Flex className='justify-end items-center gap-x-4 py-5'>
            <p className='text-base text-secondary font-base font-normal hover:text-primary hover:font-bold duration-300 cursor-pointer'>Compare</p>
            <HiOutlineRefresh/>
            </Flex>
            <Flex className='justify-end items-center gap-x-4'>
            <p className='text-base text-secondary font-base font-normal hover:text-primary hover:font-bold duration-300 cursor-pointer'>Add to Cart</p>
            <BsFillCartDashFill/>
            </Flex>
        </div>
        </div>
        <Flex className='justify-between items-center pt-6'>
            <ProtionHeading text='Basic Crew Neck Tee'/>
            <p className='text-secondary text-base font-dm font-normal'>$44.00</p>
        </Flex>
    </div>
  )
}
