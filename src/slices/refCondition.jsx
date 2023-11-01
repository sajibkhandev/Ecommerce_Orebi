import { createSlice } from '@reduxjs/toolkit'

export const refCondition = createSlice({
  name: 'refMemege',
  initialState: {
    refValue: "",
    refValue2: "",
  },
  reducers: {
    refMenagment: (state,action) => {
        state.refValue=action.payload
       
     
        
    },
    refMenagment2: (state,action)=>{
        state.refValue2=action.payload

    }
  },
})

export const { refMenagment,refMenagment2 } = refCondition.actions

export default refCondition.reducer