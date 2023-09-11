import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { pages } from '../../slices/breadCrumbs'

export default function Navber() {
    let dispatch=useDispatch()
    let handlebreadcrumbs=(name)=>{
        dispatch(pages(name))

    }
  return (
    <>
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-1/4'>
                    <Image src={logo} alt={logo}/>
                </div>
                <Flex className='w-3/4 justify-end'>
                    <ul className='flex gap-x-10'>
                        <Link onClick={()=>handlebreadcrumbs("Home")} to='/'>
                            <List text="Home"/>
                        </Link>
                        <Link onClick={()=>handlebreadcrumbs("Shop")} to='/shop'>
                             <List text="Shop"/>
                        </Link>
                        <List text="About"/>
                        <List text="Contacts"/>
                        <List text="Journal"/>
                    </ul>
                </Flex>
            </Flex>
        </Container>
    </nav>
    </>
  )
}
