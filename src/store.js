import { configureStore } from '@reduxjs/toolkit'
import breadCrumbs from './slices/breadCrumbs'
import addToCart from './slices/addToCart'
import refCondition from './slices/refCondition'


export default configureStore({
  reducer: {
    breadcrumb:breadCrumbs,
    cartItem:addToCart,
    manegeRef:refCondition

    
    

  },
})