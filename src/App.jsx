import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import Section from './components/Section'
import List from './components/List'
import Facillity from './components/Facillity'
import SubHeading from './components/SubHeading'
import ProtionHeading from './components/ProtionHeading'
import Image from './components/Image'
import logo from './assets/logo.png'
import Product from './components/Product'
import product1 from './assets/product1.png'
import product2 from './assets/product2.png'
import product3 from './assets/product3.png'
import product4 from './assets/product4.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import PrevArrows from './components/PrevArrows'
import NextArrows from './components/NextArrows'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import RootLayouts from './components/RootLayouts'
import Badge from './components/Badge'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import ContactsPage from './pages/ContactsPage'

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<RootLayouts />}>
         <Route
             path="/"
             element={<HomePage />}
         ></Route>

          <Route
             path="/shop"
             element={<Product />}
         ></Route>
          <Route
             path="/sign-up"
             element={<SignupPage />}
         ></Route>

         <Route
             path="/contacts"
             element={<ContactsPage />}
         ></Route>
         <Route
             path="/login"
             element={<LoginPage />}
         ></Route>
         <Route
             path="/checkout"
             element={<CheckoutPage />}
         ></Route>
         <Route
             path="*"
             element={<ErrorPage />}
         ></Route>
        

    </Route>
   
   </>
  )
);

export default function App() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrows />,
    nextArrow: <NextArrows />
  };
  return (
   <>
   <RouterProvider router={router} />



















   {/* <List text="Home"/>
   <List text="Shop"/>
   <List text="About"/>
   <List text="Contacts"/>
   <List text="Journal"/> */}

   {/* <Facillity/> */}

   {/* <SubHeading text='New Arrivals'/> */}
   {/* <ProtionHeading text='Basic Crew Neck Tee'/> */}

   {/* <Image src={logo} /> */}

   {/* <Slider {...settings}>
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
        </Slider> */}
      




        
    </>
  )
}
