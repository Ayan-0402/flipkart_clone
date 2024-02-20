import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchStore = createAsyncThunk("fetchstore",async()=>{
    try{
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        return response.data;
    }
    catch(error){
        throw error;
    }
})

const cartSlice = createSlice({
    name:'cartInfromation',
    initialState: {
        cartData:[],
        stateManager:[],
        data:[],
        isLoding:false,
        isError:false
    },
    reducers:{
        addCartData:((state,action)=>{
            state.cartData.push(action.payload)
        }),
        removeCartData:((state,action)=>{
            state.cartData.splice(action.payload,1)
        }),
        updateDataState:((state,action)=>{
            state.stateManager=(action.payload)
        })
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchStore.pending,(state,action)=>{
            state.isLoding=true;
        });
        builder.addCase(fetchStore.fulfilled,(state,action)=>{
            state.isLoding=false;
            state.stateManager=action.payload
        });
        builder.addCase(fetchStore.rejected,(state,action)=>{
            console.log('Error',action.payload);
            state.isError=true
        })
    }

})
export const {addCartData,removeCartData, updateDataState} = cartSlice.actions
export const cartReducer = cartSlice.reducer