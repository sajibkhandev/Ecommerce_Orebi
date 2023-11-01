import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { pages } from '../../slices/breadCrumbs'

export default function Navber() {
    let data=useSelector((state)=>(state.manegeRef.refValue))
    let data2=useSelector((state)=>(state.manegeRef.refValue2))
    let dispatch=useDispatch()
    let handlebreadcrumbs=(name)=>{
        dispatch(pages(name))

    }
  return (
    <>
   
   <div onClick={data2}>
   <nav onClick={data} className='py-8'>
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
                        <Link onClick={()=>handlebreadcrumbs("Products")} to='/products'>
                             <List text="Shop"/>
                        </Link>
                        <Link onClick={()=>handlebreadcrumbs("About")} to='/about'>
                            <List text="About"/>
                        </Link>
                       <Link onClick={()=>handlebreadcrumbs("Contacts")} to='/contacts'>
                       <List text="Contacts"/>
                       </Link>
                        <List text="Journal"/>
                    </ul>
                </Flex>
            </Flex>
        </Container>
    </nav>
   </div>
    
    </>
  )
}
