import React from 'react'

import Section from '../components/Section'
import Image from '../components/Image'
import Facillity from '../components/Facillity'
import Container from '../components/Container'
import Flex from '../components/Flex'
import banner from '../assets/banner.png'
import SubHeading from '../components/SubHeading'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import PrevArrows from '../components/PrevArrows'
import NextArrows from '../components/NextArrows'

import add from '../assets/add.png'
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

export default function HomePage() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrows />,
    nextArrow: <NextArrows />
  };
  return (
    <Section>
      {/* <Image src={banner}/> */}
      <Container>
      {/* <div className='border-b border-solid border-six py-5 '>
        <Flex className='justify-between'>
        <Facillity/>
        <Facillity/>
        <Facillity/>
        </Flex>

      </div> */}
      {/* <Link>
         <Image src={add} alt="add" className='pt-28 pb-32'/>
      </Link>
      <SubHeading text="New Arrivals" className='pb-12'/>
      <div className='relative pb-28'>
      <Slider {...settings}>
          <div>
          <Product src={product1}/>
          </div>
          <div>
          <Product src={product2}/>
          </div>
          <div>
          <Product src={product3}/>
          </div>
          <div>
          <Product src={product4}/>
          </div>
          <div>
          <Product src={product5}/>
          </div>
          <div>
          <Product src={product6}/>
          </div>
          <div>
          <Product src={product7}/>
          </div>
          <div>
          <Product src={product8}/>
          </div>
          <div>
          <Product src={product9}/>
          </div>
          <div>
          <Product src={product10}/>
          </div>
          <div>
          <Product src={product11}/>
          </div>
          <div>
          <Product src={product12}/>
          </div>
        </Slider>

      </div>  */}
      <SubHeading text='Our Bestsellers' className='pb-12'/>
      <Flex className='justify-between'>
      <Product heading='Product1' src={product5}/>
      <Product heading='Product2' src={product6}/>
      <Product heading='Product3' src={product7}/>
      <Product heading='Product4' src={product8}/>
        
      </Flex>
      {/* <Link to='/'>
          <Image src={add2} className='py-32'/>
      </Link>
      <SubHeading text='Special Offers' className='pb-12'/>
      <Flex className='justify-between pb-28'>
      <Product src={product9}/>
      <Product src={product10}/>
      <Product src={product11}/>
      <Product src={product12}/>
        
      </Flex> */}

      </Container>
      
    </Section>
  )
}
