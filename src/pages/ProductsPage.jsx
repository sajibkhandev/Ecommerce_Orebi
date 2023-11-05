import React, { useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

import { useSelector } from 'react-redux'
import paginationIcon1 from '../assets/paginationIcon1.png'
import paginationIcon2 from '../assets/paginationIcon2.png'
import Pagination from '../components/Pagination'
import {GoTriangleDown,GoTriangleUp} from 'react-icons/go'


export default function ProductsPage() {
  let [category1,setCategory1]=useState(false)
  let [category3,setCategory3]=useState(false)

  let [smartphones,setSmartphones]=useState(false)
  let [desktops,setDesktops]=useState(false)
  let [watchs,setWatchs]=useState(false)
  let [tablets,setTablets]=useState(false)
  let [loptops,setLoptops]=useState(false)

  let [smartphones2,setSmartphones2]=useState(false)
  let [desktops2,setDesktops2]=useState(false)
  let [watchs2,setWatchs2]=useState(false)
  let [tablets2,setTablets2]=useState(false)
  let [loptops2,setLoptops2]=useState(false)

  let [color,setColor]=useState(true)
  let [brand,setBrand]=useState(true)
  let [price,setPrice]=useState(true)

  let [page,setPage]=useState(12)
  let data=useSelector((state)=>(state.breadcrumb.previousName))
  let data1=useSelector((state)=>(state.manegeRef.refValue))
  let data2=useSelector((state)=>(state.manegeRef.refValue2))

  
  
  return (
    <div onClick={data1}>
      <div onClick={data2}>
      <Section className='py-28'>
        <Container>
        <SubHeading text="Products" className='text-text49'/>
            <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
             <Link to={data=="Home"?'/':`/${data}`}>{data}</Link></p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>

            </Flex>
            
              <div className='py-28'>
              <Flex className=''>
                {/* Part One */}
                <div className='w-3/12 '>
                  <h4 className='text-primary text-xl font-dm font-bold pb-8'>Shop by Category</h4>
                  <div className='pr-8 text-secondary text-base font-dm font-normal '>
                    <div className='flex items-center justify-between border-solid border-b border-four'><li className=' py-5 list-none'>Category 1</li><span onClick={()=>setCategory1(!category1)} className='text-xl cursor-pointer'>{`${category1?"-":"+"}`}</span></div>
                    {category1&& 
                    <div className='pl-10'>
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Smartphones</li><span onClick={()=>setSmartphones(!smartphones)} className='text-xl cursor-pointer'>{`${smartphones?"-":"+"}`}</span></div>
                      {smartphones&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}

                      
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Desktops</li><span onClick={()=>setDesktops(!desktops)} className='text-xl cursor-pointer'>{`${desktops?"-":"+"}`}</span></div>
                       {desktops&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Watchs</li><span onClick={()=>setWatchs(!watchs)} className='text-xl cursor-pointer'>{`${watchs?"-":"+"}`}</span></div>
                       {watchs&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Tablets</li><span onClick={()=>setTablets(!tablets)} className='text-xl cursor-pointer'>{`${tablets?"-":"+"}`}</span></div>
                       {tablets&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Loptops</li><span onClick={()=>setLoptops(!loptops)} className='text-xl cursor-pointer'>{`${loptops?"-":"+"}`}</span></div>
                       {loptops&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}
                      </div>}
                    <li className='border-solid border-b border-four py-5 list-none'>Category 2</li>
                    <div className='flex items-center justify-between border-solid border-b border-four'><li className=' py-5 list-none'>Category 3</li><span onClick={()=>setCategory3(!category3)} className='text-xl cursor-pointer'>{`${category3?"-":"+"}`}</span></div>
                    {category3&& 
                    <div className='pl-10'>
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Smartphones</li><span onClick={()=>setSmartphones2(!smartphones2)} className='text-xl cursor-pointer'>{`${smartphones2?"-":"+"}`}</span></div>
                      {smartphones2&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}

                      
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Desktops</li><span onClick={()=>setDesktops2(!desktops2)} className='text-xl cursor-pointer'>{`${desktops2?"-":"+"}`}</span></div>
                       {desktops2&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Watchs</li><span onClick={()=>setWatchs2(!watchs2)} className='text-xl cursor-pointer'>{`${watchs2?"-":"+"}`}</span></div>
                       {watchs2&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Tablets</li><span onClick={()=>setTablets2(!tablets2)} className='text-xl cursor-pointer'>{`${tablets2?"-":"+"}`}</span></div>
                       {tablets2&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}
                      <div className='flex items-center justify-between border-solid border-b border-four'><li className='text-red-500 py-5 list-none'>Loptops</li><span onClick={()=>setLoptops2(!loptops2)} className='text-xl cursor-pointer'>{`${loptops2?"-":"+"}`}</span></div>
                       {loptops2&&
                      <div className='pl-10 '>
                      <li className=' py-1 text-purple-500'>Realme</li>
                      <li className=' py-1 text-purple-500'>iPhone</li>
                      <li className=' py-1 text-purple-500'>Vivo</li>
                      <li className=' py-1 text-purple-500'>Samsung</li>
                      <li className=' py-1 text-purple-500'>Xiaomi</li>
                    </div>}
                      </div>}
                    <li className='border-solid border-b border-four py-5 list-none'>Category 4</li>
                    <li className='border-solid border-b border-four py-5 list-none'>Category 5</li>
                  </div>
                  {/*  */}
                  <div className='flex pt-14 pb-4 items-center justify-between pr-8'>
                  <h4 className='text-primary text-xl font-dm font-bold'>Shop by Color</h4>
                  <span onClick={()=>setColor(!color)} className='text-lg '>{color?<GoTriangleDown/>:<GoTriangleUp/>} </span>
                  </div>
                 {color&& <div className='pr-8 text-secondary text-base font-dm font-normal '>
                    <li className='border-solid border-b border-four py-5 list-none'>Color 1</li>
                    <li className='border-solid border-b border-four py-5 list-none'>Color 2</li>
                    <li className='border-solid border-b border-four py-5 list-none'>Color 3</li>
                    <li className='border-solid border-b border-four py-5 list-none'>Color 4</li>
                    <li className='border-solid border-b border-four py-5 list-none'>Color 5</li>
                  </div>}
                  {/*  */}
                  <div className='flex pt-14 pb-4 items-center justify-between pr-8 '>
                  <h4 className='text-primary text-xl font-dm font-bold'>Shop by Brand</h4>
                  <span onClick={()=>setBrand(!brand)} className='text-lg '>{brand?<GoTriangleDown/>:<GoTriangleUp/>}</span>
                  </div>
                 {brand&& <div className='pr-8 text-secondary text-base font-dm font-normal '>
                    <li className='border-solid border-b border-four py-5 list-none'>Brand 1</li>
                    <li className='border-solid border-b border-four py-5 list-none'>Brand 2</li>
                    <li className='border-solid border-b border-four py-5 list-none'>Brand 3</li>
                    <li className='border-solid border-b border-four py-5 list-none'>Brand 4</li>
                    <li className='border-solid border-b border-four py-5 list-none'>Brand 5</li>
                  </div>}
                  {/*  */}
                  <div className='flex pt-14 pb-4 items-center justify-between pr-8 '>
                  <h4 className='text-primary text-xl font-dm font-bold'>Shop by Price</h4>
                  <span onClick={()=>setPrice(!price)} className='text-lg '>{price?<GoTriangleDown/>:<GoTriangleUp/>}</span>
                  </div>
                 {price&& <div className='pr-8 text-secondary text-base font-dm font-normal '>
                    <li className='border-solid border-b border-four py-5 list-none'>$0.00 - $9.99</li>
                    <li className='border-solid border-b border-four py-5 list-none'>$10.00 - $19.99</li>
                    <li className='border-solid border-b border-four py-5 list-none'>$20.00 - $29.99</li>
                    <li className='border-solid border-b border-four py-5 list-none'>$30.00 - $39.99</li>
                    <li className='border-solid border-b border-four py-5 list-none'>$40.00 - $69.99</li>
                  </div>}

                </div>
                {/* Part One */}
                <div className='w-9/12'>
                  <div className='flex justify-between pb-16 mx-2.5'>
                    <div className='flex gap-x-3 '>
                      <img src={paginationIcon1} alt="" />
                      <img src={paginationIcon2} alt="" />
                    </div>
                    <div className='flex gap-x-10'>
                      <div>
                        <label className='text-base text-secondary font-dm font-normal mr-2' htmlFor="sort">Sort by:</label>
                        <select className='border border-solid text-base text-secondary font-dm font-normal py-1.5 px-6' name="" id="sort">
                          <option value="">Featured</option>
                          <option value="">Design</option>
                          <option value="">Color</option>
                        </select>
                      </div>
                      <div>
                        <label className='text-base text-secondary font-dm font-normal mr-2' htmlFor="show">Show:</label>
                        <select onChange={(e)=>setPage(e.target.value)} className='border border-solid text-base text-secondary font-dm font-normal py-1.5 px-8' name="" id="show">
                          <option value="">Please select</option>
                          <option value="8">8</option>
                          <option value="12">12</option>
                          <option value="16">16</option>
                          <option value="20">20</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <Pagination itemsPerPage={page==8?8:page==12?12:page==16?16:page==20?20:12}/>
                </div>
              </Flex>
              </div>
            
        </Container>
    </Section>
      </div>
    </div>
  )
}
