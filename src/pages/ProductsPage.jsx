import React, { useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

import { useSelector } from 'react-redux'
import Image from '../components/Image'
import body from '../assets/BODY.png'
import paginationIcon1 from '../assets/paginationIcon1.png'
import paginationIcon2 from '../assets/paginationIcon2.png'
import Pagination from '../components/Pagination'


export default function ProductsPage() {
  let [page,setPage]=useState(12)
  let data=useSelector((state)=>(state.breadcrumb.previousName))

  
  
  return (
    <Section className='py-28'>
        <Container>
        <SubHeading text="Products" className='text-text49'/>
            <Flex className='items-center gap-x-1'>
             <p className=' text-xs text-third font-normal font-dm cursor-pointer'>
             <Link to={data=="Home"?'/':`/${data}`}>{data}</Link></p>  
             <FaAngleRight className=' text-xs text-third font-normal font-dm'/> 
            <p className='first-letter:uppercase text-xs text-third font-normal font-dm cursor-pointer'>{window.location.pathname.replace("/","")}</p>

            </Flex>
            
              <div className='py-20'>
              <Flex className=''>
                <div className='w-3/12 '>sdf</div>
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
  )
}
