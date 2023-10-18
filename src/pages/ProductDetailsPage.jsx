import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { FaAngleRight } from 'react-icons/fa'
import Image from '../components/Image'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import SubHeading from '../components/SubHeading'
import {AiOutlineStar} from 'react-icons/ai'
import {BsFillCircleFill} from 'react-icons/bs'
import Button from '../components/Button'

export default function ProductDetailsPage() {
  
  return (
    <Section className=' pt-32'>
        <Container>
        <SubHeading text="Product" className='text-text49'/>
        <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
              <Link to='/'>Home</Link></p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>

            </Flex>
            <Flex  className='flex-wrap justify-between gap-y-10 pt-36 pb-12'>
              <Image src={product1} className='w-780 '/>
              <Image src={product2} className='w-780 '/>
              <Image src={product3} className='w-780 '/>
              <Image src={product4} className='w-780 '/>
              
            </Flex>
            {/* Product Review start */}
            <SubHeading text="Product"/>
            <Flex className='gap-x-4 items-center py-4'>
              <Flex className='gap-y-0.5'>
              <AiOutlineStar className='text-sm'/>
              <AiOutlineStar className='text-sm'/>
              <AiOutlineStar className='text-sm'/>
              <AiOutlineStar className='text-sm'/>
              <AiOutlineStar className='text-sm'/>
              </Flex>
              <p className='text-sm text-secondary font-dm font-normal'>1 Review</p>
            </Flex>
            <div className=' w-780 flex gap-x-4 items-center pb-6 mb-7 border-b border-solid border-six'>
              <p className='text-base text-secondary font-dm font-normal line-through'>$88.00</p>
              <p className='text-xl text-primary font-dm font-bold'>$44.00</p>
            </div>
            {/* Product Review end */}
          

            {/* Color start */}
            <div className=' w-780 gap-x-4 pb-6 mb-7 border-b border-solid border-six'>
            <Flex className='items-center gap-x-14 pb-8'>
            <h4 className='text-base text-primary font-dm font-bold'>COLOR:</h4>
            <Flex className='gap-x-3'>
              <BsFillCircleFill className='text-xl text-green-300'/>
              <BsFillCircleFill className='text-xl text-blue-300'/>
              <BsFillCircleFill className='text-xl text-red-300'/>
              <BsFillCircleFill className='text-xl text-yellow-300'/>
              <BsFillCircleFill className='text-xl text-purple-300'/>
            </Flex>
            </Flex>

            <Flex className='items-center gap-x-20 pb-8'>
            <h4 className='text-base text-primary font-dm font-bold'>SIZE:</h4>
            <select className='px-4 py-2 border border-solid w-[160px] text-lg'>
              <option value="">S</option>
              <option value="">L</option>
              <option value="">M</option>
              <option value="">XL</option>
              <option value="">XXl</option>
            </select>
            </Flex>

            <Flex className='items-center gap-x-8 '>
            <h4 className='text-base text-primary font-dm font-bold'>QUANTITY:</h4>
            <div className=' flex justify-between px-4 py-2 border border-solid w-[160px]'>
              <button className='text-xl'>-</button>
              <span>1</span>
              <button className='text-lg'>+</button>
            </div>
            </Flex>
            </div>
            {/* Color and */}
            
            <Flex className='w-780 gap-x-4  mb-7 border-b border-solid border-six items-center gap-x-7 pb-8'>
            <h4 className='text-base text-primary font-dm font-bold'>STATUS:</h4>
            <p className='text-base text-secondary font-dm font-normal'>In stock</p>
            </Flex>
            
            <Flex className='w-780 gap-x-5  mb-7 border-b border-solid border-six items-center gap-x-7 pb-8'>
            <Button text="Add to Wish List"/>
            <Button text="Add to Cart"/>
            </Flex>

        </Container>
    </Section>
  )
}
