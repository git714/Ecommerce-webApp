import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import axios from 'axios';


export const Addproduct = () => {
   const navigate = useNavigate();
  
    const {register,handleSubmit}=useForm();
const onSubmit=(data)=>{
    console.log(data)
    axios.post('http://localhost:5000/users/product/create', data)
    .then((res) => {

      navigate("/product")

    }).catch((error) => {
        console.log(error)
    });

}


  return (
    <><div className="container">
    <h2>Add new Category</h2>
    <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)} >
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="product">Product Name:</label>
        <div className="col-sm-10">
          <input {...register("name",{required:true})} type="text" className="form-control" id="name" placeholder="Enter the product name" name="name"/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="description">Description:</label>
        <div className="col-sm-10">
          <input {...register("description",{required:true})} type="text" className="form-control" id="description" placeholder="Enter the description" name="description"/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="price">Price:</label>
        <div className="col-sm-10">
          <input {...register("price",{required:true})} type="text" className="form-control" id="price" placeholder="Enter the price" name="price"/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="quantity">Quantity:</label>
        <div className="col-sm-10">
          <input {...register("quantity",{required:true})} type="text" className="form-control" id="quantity" placeholder="Enter the number quantity" name="quantity"/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="sold">Sold:</label>
        <div className="col-sm-10">
          <input {...register("sold",{required:true})} type="text" className="form-control" id="sold" placeholder="Enter the number of items sold" name="sold"/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="shipping">Shipping:</label>
        <div className="col-sm-10">
          <input {...register("shipping",{required:true})} type="text" className="form-control" id="shipping" placeholder="Enter the shipping true or false" name="shipping"/>
        </div>
      </div>
     
      <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-primary">Submit</button>
         
        </div>
      </div>
    </form>
  </div>

  </>
  )
}

