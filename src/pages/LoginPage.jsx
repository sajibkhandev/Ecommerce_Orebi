import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import Input2 from '../components/Input2'
import Button from '../components/Button'
import { useSelector } from 'react-redux'

export default function LoginPage() {
  let data=useSelector((state)=>(state.manegeRef.refValue))
  let data2=useSelector((state)=>(state.manegeRef.refValue2))
  
  return (
    <div onClick={data}>
      <div onClick={data2}>
      <Section className='pt-32 pb-36'>
        <Container>
            <SubHeading text="Login" className='text-text49'/>
            <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
               <Link to='/'>Home</Link></p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>

            </Flex>
            <p className='text-secondary text-base font-dm font-normal pt-32 w-644'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <div className='border-t border-solid border-six pt-14 mt-14'>
                <SubHeading text='Returning Customer' className='pb-10'/>
                <div className='flex flex-wrap gap-x-10'>
                <div className='w-4/12 '>
                    <label className='text-primary text-base font-dm font-bold' htmlFor="email">Email address</label>
                   <Input2 placeholder='company@domain.com' id="email"/>
                    </div>
                    <div className='w-4/12 '>
                     <label className='text-primary text-base font-dm font-bold' htmlFor="password">Password</label>
                   <Input2 placeholder='Last Name' id="password"/>
                   </div>
                   </div>
            </div>
            <Button text="Log in" className='mt-7'/>
            <div className='border-t border-solid border-six pt-14 mt-14'>
                <SubHeading text='New Customer' className='pb-9'/>
                <p className='text-secondary text-base font-dm font-normal pb-12 w-644'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
              
            </div>
            <Button text='Continue'/>
        </Container>
    </Section>
      </div>
    </div>
  )
}
