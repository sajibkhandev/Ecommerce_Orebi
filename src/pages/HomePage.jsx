import React from 'react'

import Section from '../components/Section'
import Image from '../components/Image'
import Container from '../components/Container'
import Flex from '../components/Flex'
import banner from '../assets/banner.png'
import SubHeading from '../components/SubHeading'

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
import { Link } from 'react-router-dom'
import Facility from '../components/Facility'


export default function HomePage() {

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
    
    appendDots: dots => (
      <div >
        <ul style={{ margin: "0px", }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`${i==1?'text-green-500':`${i==2?'text-blue-500':'text-red-500'}`}`}>
        0{i + 1}
      </div>
    )
    
  };
  
  return (
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
             <Facility/>
             <Facility/>
             <Facility/>
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
          <Product heading='Product1' src={product1}/>
          </div>
          <div>
          <Product heading='Product2' src={product2}/>
          </div>
          <div>
          <Product heading='Product3' src={product3}/>
          </div>
          <div>
          <Product heading='Product4' src={product4}/>
          </div>
          <div>
          <Product heading='Product5' src={product5}/>
          </div>
          <div>
          <Product heading='Product6' src={product6}/>
          </div>
          <div>
          <Product heading='Product7' src={product7}/>
          </div>
          <div>
          <Product heading='Product8' src={product8}/>
          </div>
          <div>
          <Product heading='Product9' src={product9}/>
          </div>
          <div>
          <Product heading='Product10' src={product10}/>
          </div>
          <div>
          <Product heading='Product11' src={product11}/>
          </div>
          <div>
          <Product heading='Product12' src={product12}/>
          </div>
        </Slider>

      </div> 
      <SubHeading text='Our Bestsellers' className='pb-12'/>
      <Flex className='justify-between'>
      <Product heading='Product5' src={product5}/>
      <Product heading='Product6' src={product6}/>
      <Product heading='Product7' src={product7}/>
      <Product heading='Product8' src={product8}/>
        
      </Flex>
      <Link to='/'>
          <Image src={add2} className='py-32'/>
      </Link>
      <SubHeading text='Special Offers' className='pb-12'/>
      <Flex className='justify-between pb-28'>
      <Product heading='Product9' src={product9}/>
      <Product heading='Product10' src={product10}/>
      <Product heading='Product11' src={product11}/>
      <Product heading='Product12' src={product12}/>
        
      </Flex>
      </Container>
    </Section>
  )
}
