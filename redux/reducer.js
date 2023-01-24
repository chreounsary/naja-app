import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  client: {toggleForm: false, formId: undefined},
}

export const ReducerSlice = createSlice({
  name: 'naja-app',
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm
    },
    updateAction: (state, action) => {
      state.client.formId =  action.payload
    }
  },
})

export const { toggleChangeAction, updateAction } = ReducerSlice.actions  //export all action
export default ReducerSlice.reducer; //export statement of action
//affer export action you need to export statemen