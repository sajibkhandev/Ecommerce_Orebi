import React, { useEffect, useRef, useState } from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'

import Input from '../Input'
import User from '../icons/User'
import Cart from '../icons/Cart'
import { Link } from 'react-router-dom'
import List from '../List'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,remoneButton} from '../../slices/addToCart'
import {AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {GoTriangleDown} from 'react-icons/go'
import Button from '../Button'
import { refMenagment,refMenagment2 } from '../../slices/refCondition'

export default function SearchBer() {
  let drop1Ref=useRef(null)
  let drop2Ref=useRef(null)
  let [open,setOpen]=useState(false)
  let [total,setTotal]=useState(0)
  let cartData=useSelector((state)=>(state.cartItem.cart))
  let sajib=useSelector((state)=>(state.cartItem.cartOpen))

  let dispatch=useDispatch()

  let handleIncrement=(item)=>{
    dispatch(increment(item))
    
  }
  let handleDecrement=(item)=>{
    dispatch(decrement(item))
   
    
  }
  let handleRemove=(item)=>{
    dispatch(remoneButton(item))
  }
  useEffect(()=>{
    let total=0
    cartData.map(item=>{
     
      total+=item.price*item.quantity
      
    })
    
    setTotal(total)
    setOpen(sajib)
  },[cartData])
  

 

  let handleSlideBer=(e)=>{
    if(e.target.classList[0]=="btn"){
      if(drop1Ref.current.style.display=="block"){
        drop1Ref.current.style.display="none"
      }else{
        drop1Ref.current.style.display="block"
      }

    }else{
      if(!drop1Ref.current.contains(e.target)){
        if(drop1Ref.current.style.display=="block"){
          drop1Ref.current.style.display="none"
        }
      }
    }
  }
  dispatch(refMenagment(handleSlideBer))
  
  
  let handleSlideBer2=(e)=>{
    if(e.target.classList[0]=="btn2"){
      if(drop2Ref.current.style.display=="block"){
        drop2Ref.current.style.display="none"
      }else{
        drop2Ref.current.style.display="block"
      }

    }else{
      if(!drop2Ref.current.contains(e.target)){
        if(drop2Ref.current.style.display=="block"){
          drop2Ref.current.style.display="none"
        }
      }
    }

  }
  dispatch(refMenagment2(handleSlideBer2))
  return (
    <>
    
    <div onClick={handleSlideBer}>
      <div onClick={handleSlideBer2}>
    <Section className='bg-four py-10'>
        <Container>
            <Flex>
                <Flex className='w-3/12 items-center gap-x-2.5 relative'>
                  <FaBars className='btn'/>
                  <div >
                  <ul ref={drop1Ref} className='hidden bg-[#2D2D2D] w-[263px] z-10 absolute top-[60px] left-0'>
                    <List className='py-4 px-5 hover:text-white hover:ml-1.5 hover:font-bold' text='Accesories'/>
                    <List className='py-4 px-5 hover:text-white hover:ml-1.5 hover:font-bold' text='Furniture'/>
                    <List className='py-4 px-5 hover:text-white hover:ml-1.5 hover:font-bold' text='Electronics'/>
                    <List className='py-4 px-5 hover:text-white hover:ml-1.5 hover:font-bold' text='Clothes'/>
                    <List className='py-4 px-5 hover:text-white hover:ml-1.5 hover:font-bold' text='Bags'/>
                    <List className='py-4 px-5 hover:text-white hover:ml-1.5 hover:font-bold' text='Home appliances'/>
                  </ul>
                  </div>
                  
                  <p className='text-sm text-primary font-dm font-normal'>Shop by Category</p>
                </Flex>
                <div className='w-6/12 '>
                  <Input placeholder="Search Products"/>
                </div>
                <Flex className='w-3/12 gap-x-10 justify-end items-center relative'>
               
               <Flex className='gap-x-2.5 items-center '>
                         <User/>
                    <GoTriangleDown className='btn2 text-xl'/>
                    <div ref={drop2Ref} className='hidden border border-solid border-black w-[200px] absolute top-[50px] right-[110px] z-30'>
                     <Link to='/sign-up'>
                     <Button text='Sign Up' className='w-full border-0  text-white hover:bg-[#000] hover:text-white'/>
                     </Link>
                      <Link to='/login'>
                      <Button text='Log In' className='w-full bg-white text-[#000000] border-0'/>
                      </Link>
                    </div>
                      
                  </Flex>
               
                  <div className='relative ' onClick={()=>setOpen(true)}><Cart /></div>
                  <div className='absolute top-[4px] -right-[20px] w-[22px] h-[22px] bg-yellow-500 rounded-full text-center leading-[22px] text-white'>
                  {cartData.length}
                  </div>
                </Flex>
            </Flex>
            
            {open &&
             <div className='bg-primary text-white h-screen w-2/6 absolute top-0 right-0 z-10'>
              <div onClick={()=>setOpen(false)}><button className=' m-2 p-2 bg-black text-white border-white border border-solid text-white' onClick={()=>handleRemove(item)}><AiOutlineClose className='text-xl'/></button></div>
              <ul className='flex justify-between pt-7 px-2 py-5 text-lg font-semibold text-center'>
                <li>Action:</li>
                <li>Product:</li>
                <li>Price:</li>
                <li>Quantity:</li>
                <li>Subtotal:</li>
              </ul>
              {cartData.length>0?cartData.map(item=>(
              <ul className='flex justify-between px-2 text-base font-medium py-5 border-b border-solid border-white'>
                  <li><button className='p-2 bg-black text-white border-white border border-solid text-white' onClick={()=>handleRemove(item)}><AiOutlineClose className='text-xl'/></button></li>
                  <li>{item.title} </li>
                  <li>{item.price}</li>
                  <li className='border border-solid border-white px-4 py-1'><button onClick={()=>handleDecrement(item)} className='mr-2 text-xl'>-</button >{item.quantity}<button onClick={()=>handleIncrement(item)} className='ml-2 text-lg'>+</button></li>
                  <li>{item.price*item.quantity}$</li>
              </ul>
                )):<h2 className='text-4xl font-medium h-full flex justify-center my-[300px]'>Cart is Empty</h2>}
                <h2 className='absolute bottom-0 right-0 p-5 text-3xl'>Total: {total}$</h2>
                
              
              </div>}
        </Container>
    </Section>
    </div>
        </div>
    </>
  )
}
