import React from 'react'

import Section from '../components/Section'
import Container from '../components/Container'
import banner from '../assets/banner.png'
import Image from '../components/Image'
import Flex from '../components/Flex'
import Two from '../components/icons/Two'
import Car from '../components/icons/Car'
import Refres from '../components/icons/Refres'

import SubHeading from '../components/SubHeading'
import { Link } from 'react-router-dom'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import PrevArrows from '../components/PrevArrows'
import NextArrows from '../components/NextArrows'

import ad1 from '../assets/ad1.png'
import ad2 from '../assets/ad2.png'
import ad3 from '../assets/ad3.png'
import add2 from '../assets/add2.png'
import Product from '../components/Product'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'
import product11 from '../assets/product11.png'
import product12 from '../assets/product12.png'
import { useSelector } from 'react-redux'



export default function HomePage() {
  let data=useSelector((state)=>(state.manegeRef.refValue))
    let data2=useSelector((state)=>(state.manegeRef.refValue2))

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrows />,
    nextArrow: <NextArrows />
  };
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    speed: 1000,
    
    appendDots: dots => (<div ><ul style={{ margin: "0px", }}> {dots} </ul></div>),
    customPaging: i => (<div className={`${i==1?'text-green-500':`${i==2?'text-blue-500':'text-red-500'}`}`}>0{i + 1}</div>
    )
    
  };
  
  return (
    <div onClick={data}>
      <div onClick={data2}>
      <Section>
      <Slider {...bannerSettings}>
          <div>
          <Image src={banner} alt={banner}/>
          </div>
          <div>
          <Image src={banner} alt={banner}/>
          </div>
          <div>
          <Image src={banner} alt={banner}/>
          </div>
        </Slider>
      <Container>
      <div className='border-b border-t border-solid border-six py-5 mt-8 mb-36'>
        <Flex className='justify-between'>
          <div className='flex gap-x-4 items-center'>
            <Two className='text-base'/>
            <p className='text-base text-third font-dm font-normal'>Two years warranty</p>
          </div>
          <div className='flex gap-x-4 items-center'>
            <Car className='text-base'/>
            <p className='text-base text-third font-dm font-normal'>Free shipping</p>
          </div>
          <div className='flex gap-x-4 items-center'>
            <Refres className='text-base'/>
            <p className='text-base text-third font-dm font-normal'>Return policy in 30 days</p>
          </div>
           
        </Flex>
      </div>
      <Link>
        <div className='flex justify-between'>
          <div>
            <Image src={ad1}/>
          </div>
          <div className='flex flex-col justify-between'>
            <div><Image src={ad2}/></div>
            <div><Image src={ad3}/></div>
          </div>
        </div>
      </Link>
      <SubHeading text="New Arrivals" className='pb-12 pt-32'/>
      <div className='relative pb-28'>
      <Slider {...settings}>
          <div>
          <Product heading='Product1' src={product1} price="22.00" badge="New"/>
          </div>
          <div>
          <Product heading='Product2' src={product2} price="79.00" badge="10%"/>
          </div>
          <div>
          <Product heading='Product3' src={product3} price="66.00" badge="10%"/>
          </div>
          <div>
          <Product heading='Product4' src={product4} price="44.00" badge="New"/>
          </div>
          <div>
          <Product heading='Product5' src={product5} price="10.00" badge="New"/>
          </div>
          <div>
          <Product heading='Product6' src={product6} price="50.00" badge="New"/>
          </div>
          <div>
          <Product heading='Product7' src={product7} price="49.00" badge="10%"/>
          </div>
          <div>
          <Product heading='Product8' src={product8} price="44.00" badge="New"/>
          </div>
          <div>
          <Product heading='Product9' src={product9} price="55.00" badge="New"/>
          </div>
          <div>
          <Product heading='Product10' src={product10} price="20.00" badge="New"/>
          </div>
          <div>
          <Product heading='Product11' src={product11} price="34.00" badge="10%"/>
          </div>
          <div>
          <Product heading='Product12' src={product12} price="54.00" badge="New"/>
          </div>
        </Slider>

      </div> 
      <SubHeading text='Our Bestsellers' className='pb-12'/>
      <Flex className='justify-between'>
      <Product heading='Product5' src={product5} price="10.00" badge="New"/>
      <Product heading='Product6' src={product6} price="50.00" badge="New"/>
      <Product heading='Product7' src={product7} price="49.00" badge="10%"/>
      <Product heading='Product8' src={product8} price="44.00" badge="New"/>
        
      </Flex>
      <Link to='/'>
          <Image src={add2} className='py-32'/>
      </Link>
      <SubHeading text='Special Offers' className='pb-12'/>
      <Flex className='justify-between pb-28'>
      <Product heading='Product9' src={product9} price="55.00" badge="New"/>
      <Product heading='Product10' src={product10} price="20.00" badge="New"/>
      <Product heading='Product11' src={product11} price="34.00" badge="10%"/>
      <Product heading='Product12' src={product12} price="54.00" badge="New"/>
        
      </Flex>
      </Container>
    </Section>
    </div>
    </div>
  )
}
