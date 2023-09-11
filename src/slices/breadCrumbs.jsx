import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbs = createSlice({
  name: 'breadCrumbs',
  initialState: {
    name: "",
  },
  reducers: {
    pages: (state,actions) => {
        state.name=actions.payload
        
    }
  },
})

export const { pages } = breadCrumbs.actions

export default breadCrumbs.reducer