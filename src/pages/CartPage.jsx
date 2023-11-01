import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import Image from '../components/Image'
import product12 from '../assets/product12.png'
import Button from '../components/Button'
import { FaAngleRight } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,remoneButton,cartOpen } from '../slices/addToCart'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CartPage() {
  let [total,setTotal]=useState("")
  let dispatch=useDispatch()
  let cart=useSelector((state)=>(state.cartItem.cart))
  let handleIncrement=(item)=>{
    dispatch(increment(item))
    dispatch(cartOpen(false))

  }
  let handleDecrement=(item)=>{
    dispatch(decrement(item))
    dispatch(cartOpen(false))

  }
  let handleDelete=(item)=>{
    dispatch(remoneButton(item))
    dispatch(cartOpen(false))

  }
  useEffect(()=>{
    let total=0
    cart.map(item=>{
      total+=item.quantity*item.price
    })
    setTotal(total)

  },[cart])
  
  
  return (
    <Section>
        <Container>
        <SubHeading text="Cart" className='text-text49 pt-28'/>
             <Flex className='items-center gap-x-1 '>
              <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
               <Link to='/'>Home</Link></p>  
              <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
             <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>
             </Flex>
             {/* cart start */}
             <div className='pb-14 pt-32'>
             <div className='py-8 bg-four flex justify-between text-base text-primary font-bold font-dm'>
              <div className='w-4/12 px-6'>Product</div>
              <div className='w-3/12'>Price</div>
              <div className='w-3/12'>Quantity</div>
              <div className='w-2/12'>Total</div>
              
             </div>
             {/* product start  */}
             {cart.map(item=>(
              <div className='py-8 border-solid border border-four bg-white flex justify-between items-center text-xl text-primary font-bold font-dm'>
              <div className='w-4/12 px-6 '>
                <div className='flex gap-x-10 items-center'>
                <ImCross onClick={()=>handleDelete(item)} className='text-base'/>
                <Image src={product12} className='w-[80px]'/>
                <p className='text-xl text-primary font-bold font-dm'>{item.title}</p>
                </div>
              </div>
              <div className='w-3/12'>{item.price}</div>
              <div className='w-3/12'>
                <div className=' flex justify-between px-4 py-1.5 border border-solid border-four w-[140px]'>
                  <button onClick={()=>handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={()=>handleIncrement(item)}>+</button>
                </div>
              </div>
              <div className='w-2/12'>{item.quantity*item.price}.00$</div>
              
             </div>

             ))}
             
             {/* product end  */}
             <div className='py-5 border-solid border border-four bg-white flex justify-between text-xl text-primary font-bold font-dm px-6'>
              <div className='flex gap-x-6 items-center'>
                <select className='text-secondary py-2 px-4 border border-solid border-four w-[200px]' name="" id="">
                  <option value="">SIZE</option>
                  <option value="">COLOR</option>
                  <option value="">QUANTITY</option>
                </select>
                <p>Apply coupon</p>
              </div>
              <p>Update cart</p>
              
             </div>
             </div>
             {/* part two */}
              <p className='text-end pb-6 text-xl text-parimary font-bold font-dm'>Cart totals</p>
             <div className='flex justify-end'>
              <div className='w-[644px]  flex'>
                <p className='w-1/2 py-4 px-5 border border-solid border-four text-primary font-bold text-base'>Subtotal</p>
                <p className='w-1/2 py-4 px-5 border border-solid border-four text-secondary text-base'><span className='font-bold'>{total}.00</span>$</p>
              </div>
             </div>
             <div className='flex justify-end '>
              <div className='w-[644px]  flex'>
                <p className='w-1/2 py-4 px-5 border border-solid border-four text-primary font-bold text-base'>Total</p>
                <p className='w-1/2 py-4 px-5 border border-solid border-four text-secondary text-base'><span className='font-bold text-primary text-base underline md:underline-offset-4 '>{total}.00</span>$</p>
              </div>
             </div>
             <Link to='/checkout'>
             <Button text="Proceed to Checkout" className="mt-8 mb-32 flex ml-auto"/>
             </Link>
              {/* cart end */}
        </Container>
    </Section>
  )
}
