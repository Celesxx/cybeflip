import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice(
{
  name: 'loginMetamask',
  initialState: {
    address: "",
    connected: false,
    balance: 0,
  },

  reducers: 
  {
    login: (state, action) => 
    {
      switch(action.payload.action)
      {
          case 'address': 
              state.address = action.payload.address 
              break;

          default: 
            break;
      }
    },
  },
})

export const { login, disconnect } = loginSlice.actions

export default loginSlice.reducer