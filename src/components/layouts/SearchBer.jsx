import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Bar from '../icons/Bar'

import Input from '../Input'
import User from '../icons/User'
import ButtomAngle from '../icons/ButtomAngle'
import Cart from '../icons/Cart'
import { Link } from 'react-router-dom'

export default function SearchBer() {
  let handlebreadcrumbs=(name)=>{
    console.log(name);
  }
  return (
    <>
    <Section className='bg-four py-10'>
        <Container>
            <Flex>
                <Flex className='w-3/12 items-center gap-x-2.5'>
                  <Bar/>
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
