const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value: 0,
};
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value ++;
        },
        decrement:(state)=>{
            state.value--;
        }
    }
})

// Agr upr baale functions ki functionality ko slicer se bhar nikalna hain toh voh yeh action creator ka use krke krna hoga  
export const {increment,decrement}=CounterSlice.actions;
export default CounterSlice.reducer;