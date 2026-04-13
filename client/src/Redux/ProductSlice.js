import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getproducts=createAsyncThunk("product/get" , async()=>{
    try{
        let result=await axios.get("http://localhost:5000/product");
        return result

    } catch (error) {
        console.log(error)

    }
});

export const deleteproducts=createAsyncThunk("product/delete" , async(id)=>{
    try{
        let result=await axios.delete(`http://localhost:5000/product/${id}` );
        return result

    } catch (error) {
        console.log(error)

    }
});

export const addproduct=createAsyncThunk("product/add" , async(newproduct)=>{
  try{
      let result= axios.post("http://localhost:5000/product/add" , newproduct );
      return result

  } catch (error) {
      console.log(error)

  }
});

export const editproduct=createAsyncThunk("product/id" , async({id, edited})=>{
  try{
      let result= axios.put(`http://localhost:5000/product/${id}`,edited);
      return result

  } catch (error) {
      console.log(error)

  }
});

const initialState = {
  productlist:[],
  status:null
}

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
    //Get
      .addCase(getproducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.status = "success";
        state.productlist = action.payload.data.products;
      })
      .addCase(getproducts.rejected, (state) => {
        state.status = "fail";
      })
//Delete
      .addCase(deleteproducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteproducts.fulfilled, (state, action) => {
        state.status = "success";
       
      })
      .addCase(deleteproducts.rejected, (state) => {
        state.status = "fail";
      })
//add
.addCase(addproduct.pending, (state) => {
  state.status = "pending";
})
.addCase(addproduct.fulfilled, (state, action) => {
  state.status = "success";
 
})
.addCase(addproduct.rejected, (state) => {
  state.status = "fail";
})
//edit
.addCase(editproduct.pending, (state) => {
  state.status = "pending";
})
.addCase(editproduct.fulfilled, (state, action) => {
  state.status = "success";
 
})
.addCase(editproduct.rejected, (state) => {
  state.status = "fail";
});
  },
})

// Action creators are generated for each case reducer function
export const { } = ProductSlice.actions

export default ProductSlice.reducer