import { configureStore } from '@reduxjs/toolkit'
import breadCrumbs from './slices/breadCrumbs'

export default configureStore({
  reducer: {
    breadcrumb:breadCrumbs

  },
})