import React, { useRef, useState } from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Bar from '../icons/Bar'

import Input from '../Input'
import User from '../icons/User'
import ButtomAngle from '../icons/ButtomAngle'
import Cart from '../icons/Cart'
import { Link } from 'react-router-dom'
import List from '../List'
import { useSelector } from 'react-redux'

export default function SearchBer() {
  let [open,setOpen]=useState(false)
  let cartData=useSelector((state)=>(state.cartItem.cart))

  let handlebreadcrumbs=(name)=>{
    console.log(name);
    
  }
  return (
    <>
    <Section  className='bg-four py-10'>
        <Container>
            <Flex>
                <Flex className='w-3/12 items-center gap-x-2.5'>
                  <Bar/>
                   <div className='relative' >
                   <ul  className='hidden bg-[#2D2D2D] w-[263px] absolute top-[26px] -left-[28px]'>
                    <List className='py-4 px-5 hover:text-white' text='Accesories'/>
                    <List className='py-4 px-5 hover:text-white' text='Furniture'/>
                    <List className='py-4 px-5 hover:text-white' text='Electronics'/>
                    <List className='py-4 px-5 hover:text-white' text='Clothes'/>
                    <List className='py-4 px-5 hover:text-white' text='Bags'/>
                    <List className='py-4 px-5 hover:text-white' text='Home appliances'/>
                  </ul>
                 </div>
                  <p className='text-sm text-primary font-dm font-normal'>Shop by Category</p>
                </Flex>
                <div className='w-6/12 '>
                  <Input placeholder="Search Products"/>
                </div>
                <Flex className='w-3/12 gap-x-10 justify-end items-center'>
                  <Flex className='gap-x-2.5 items-center'>
                    <Link onClick={()=>handlebreadcrumbs("Sign Up")} to='/sign-up'>
                         <User/>
                    </Link>
                      <ButtomAngle/>
                  </Flex>
                  <div onClick={()=>setOpen(true)}><Cart /></div>{cartData.length}
                </Flex>
            </Flex>
            
            {open &&
             <div className='bg-red-500 h-screen w-2/6 absolute top-0 right-0 z-10'>
              <div onClick={()=>setOpen(false)}><Cart />
              <ul>
                {cartData.map(item=>(
                  <li>{item.title} - {item.quantity}</li>
                ))}
              </ul>
              </div>
              </div>}
        </Container>
    </Section>
    </>
  )
}
