import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import axios from 'axios';


export const Addproduct = (props) => {
   const navigate = useNavigate();

  
    const {register,handleSubmit}=useForm();
const onSubmit=(data)=>{
    console.log(data)
    // const newData={
    //   name:data.name,
    //   description:data.description,
    //   price:data.price,
    //   category:data.category,
    //   quantity:data.quantity,
    //   sold:data.sold,
    //   file:data.file[0],
    //   shipping:data.shipping
    // }
    axios.post('http://localhost:5000/users/product/create', data)
    .then((res) => {
     

      navigate("/product")

    }).catch((error) => {
        console.log(error)
    });

}
const categoryload=(props)=>{
  if(props.category.length>0){


  return (
    <><div className="container">
    
    <h2>Add new Product</h2>
    <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" >
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
        <label className="control-label col-sm-2" htmlFor="category">Category:</label>
        <div className="col-sm-10">
          {/* <input {...register("category",{required:true})} type="select" className="form-control" id="category" placeholder="Enter the price" name="category"/> */}
          <select {...register("category",{required:true})}  name="category" id ="category">
          {props.category.map((option)=>{return(<option key={option.id}value={option.name}>{option.name}</option>)})}
            
            {/* <option value={props.category[1].name}>{props.category[1].name}</option>
            <option value={props.category[2].name}>{props.category[2].name}</option>
            <option value={props.category[3].name}>{props.category[3].name}</option>
            <option value={props.category[4].name}>{props.category[4].name}</option>
            <option value={props.category[5].name}>{props.category[5].name}</option>
            <option value={props.category[6].name}>{props.category[6].name}</option> */}
            
          </select>
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
        <label className="control-label col-sm-2" htmlFor="image">Product image:</label>
        <div className="col-sm-10">
          <input {...register("file",{required:true})} type="file" className="form-control" id="image"  name="file"/>
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
}else{
  return(<h1>Waiting for category data</h1>)
}

}
return(
  <>
    {categoryload(props)}
  </>
)
}
