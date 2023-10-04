import { createSlice } from '@reduxjs/toolkit'

export const addToCart = createSlice({
  name: 'cart',
  initialState: {
    cart:[]
  },
  reducers: {
    addCart: (state,actions) => {

        if(state.cart.length>0){
            let arr=[]
            state.cart.map(item=>{
                if(item.title==actions.payload.title){
                    item.quantity++
                    arr.push(item.title)
    
                }
            })
            if(arr.indexOf(actions.payload.title)==-1){
                state.cart.push(actions.payload)
            }

        }else{
            state.cart.push(actions.payload)

        }
        
       
        
    }
  },
})

export const { addCart } = addToCart.actions

export default addToCart.reducer