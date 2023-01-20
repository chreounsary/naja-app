import { configureStore } from "@reduxjs/toolkit"
import Reducer from "./reducer"
export const store = configureStore({
  reducer: { //reducer is the property of the configStore
    app: Reducer //Reducer is the function
  }
})