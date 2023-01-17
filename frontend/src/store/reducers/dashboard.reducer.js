import { createSlice, isPlainObject } from '@reduxjs/toolkit'

const initialState= 
{
  gain: 0,
}

export const dashboardSlice = createSlice(
{
  name: 'dashboard',
  initialState: 
  {
    gain: 0,
  },

  reducers: 
  {
    dashboard: (state, action) => 
    {
      switch(action.payload.action)
      {
        default :
            break
      }
    },
  },
})

export const { dashboard } = dashboardSlice.actions
export default dashboardSlice.reducer