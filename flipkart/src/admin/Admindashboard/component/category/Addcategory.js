import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import axios from 'axios';


export const Addcategory = () => {
   const navigate = useNavigate();
  
    const {register,handleSubmit}=useForm();
const onSubmit=(data)=>{
    console.log(data)
    axios.post('http://localhost:5000/users/category/create', data)
    .then((res) => {

      navigate("/admindashboard")

    }).catch((error) => {
        console.log(error)
    });

}


  return (
    <><div className="container">
    <h2>Add new Category</h2>
    <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)} >
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="category">Name:</label>
        <div className="col-sm-10">
          <input {...register("name",{required:true})} type="text" className="form-control" id="name" placeholder="Enter the category name" name="name"/>
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


