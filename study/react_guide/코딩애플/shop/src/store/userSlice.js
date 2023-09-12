import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'Kim',
  reducers : {
    changeName(){
      return 'john Kim'
    }
  }
})

export let { changeName } = user.actions

export default user