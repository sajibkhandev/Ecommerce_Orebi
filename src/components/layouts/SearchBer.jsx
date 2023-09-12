import React, { useRef } from 'react'
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

export default function SearchBer() {
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
                  <Cart/>
                </Flex>
            </Flex>
        </Container>
    </Section>
    </>
  )
}
