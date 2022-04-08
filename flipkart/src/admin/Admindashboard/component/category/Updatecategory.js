import React from 'react'


import { useForm } from "react-hook-form";
import axios from 'axios';


export const Updatecategory = (props) => {
  
    const {register,handleSubmit}=useForm();
const onSubmit=(data)=>{
    console.log(data)
    axios.post(`http://localhost:5000/users/category/${props.id}`, data)
    .then((res) => {
    }).catch((error) => {
        console.log(error)
    });

}


  return (
    <><div className="container">
    <h2>Horizontal form</h2>
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


