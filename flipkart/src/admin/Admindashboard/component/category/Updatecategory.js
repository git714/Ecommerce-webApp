import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useParams } from 'react-router-dom'

export const Updatecategory = () => {
  let {id}=useParams()
  const navigate=useNavigate()
  
    const {register,handleSubmit}=useForm();

const onSubmit=(data)=>{
 
   
    axios.post(`http://localhost:5000/users/category/update/${id}`, data)
    .then((res) => {
      navigate("/admindashboard")


    }).catch((error) => {
        console.log(error)
    });

}


  return (
    <><div className="container">
    <h2>Updatecategory</h2>
    <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)} >
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="category">Category Name:</label>
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





