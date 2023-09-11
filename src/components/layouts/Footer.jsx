import React from 'react'
import FooterHeading from '../FooterHeading'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import List from '../List'
import Image from '../Image'
import logo from '../../assets/logo.png'
import { FaFacebookF,FaLinkedinIn,FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
  <>
  <Section className='py-14 bg-four'>
    <Container>
      <Flex>
        <div className='w-2/12'>
        <FooterHeading text="MENU" className='mb-4'/>
        <ul className='flex flex-col gap-y-1.5'>
        <List text="Home"/>
        <List text="Shop"/>
        <List text="About"/>
        <List text="Contacts"/>
        <List text="Journal"/>
        </ul>
        </div>
        <div className='w-2/12'>
        <FooterHeading text="SHOP" className='mb-4'/>
        <ul className='flex flex-col gap-y-1.5'>
        <List text="Category 1"/>
        <List text="Category 2"/>
        <List text="Category 3"/>
        <List text="Category 4"/>
        <List text="Category 5"/>
        </ul>
        </div>
        <div className='w-2/12'>
        <FooterHeading text="HELP" className='mb-4'/>
        <ul className='flex flex-col gap-y-1.5'>
        <List text="Privacy Policy"/>
        <List text="Terms & Conditions"/>
        <List text="Special E-shop"/>
        <List text="Shipping"/>
        <List text="Secure Payments"/>
        </ul>
        </div>
        <div className='w-3/12'>
        <FooterHeading text="(052) 611-5711" className='mb-1.5'/>
        <FooterHeading text="company@domain.com" className='mb-4'/>
        <p className='text-sm text-third font-dm font-normal'>575 Crescent Ave. Quakertown, PA 18951</p>
        </div>
        <div className='w-3/12'>
          <Image src={logo} alt={logo}/>
        </div>
      </Flex>
      <Flex className='mt-16'>
        <Flex className='w-1/2 text-third text-base gap-x-6'>
          <FaFacebookF/>
          <FaLinkedinIn/>
          <FaInstagram/>

        </Flex>
        <div className='w-1/2'>
          <p className='text-third text-sm font-normal font-dm text-end'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </Flex>
    </Container>

  </Section>
  </>
  )
}
