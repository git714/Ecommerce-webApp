import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export const Signin = (props) => {
  // const navigate=useNavigate()
  const {register,handleSubmit}=useForm();
  const onSubmit1=(data)=>{
    
    // console.log(data);
    axios.post('http://localhost:5000/users/login', data)
    .then((res) => {
      console.log(res)
      localStorage.setItem('token',res.data.success)
      alert("login successful")
        
        // navigate("/")
    }).catch((error) => {
        console.log(error)
    });
  }

  const onSubmit=(data)=>{
    
    console.log(data);
    axios.post('http://localhost:5000/users/add', data)
    .then((res) => {
        // console.log(res.data)
        // navigate("/")
        alert("signup successful")

    }).catch((error) => {
        console.log(error)
    });
  }
  const {
    register: register2,
        handleSubmit: handleSubmit2,
  } = useForm();
 
  
  return(
    <>
    {props.header}
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="home.html">Home</a>
              </li>
              <li className="active">Login</li>
            </ul>
          </div>
          {/* /.breadcrumb-inner */}
        </div>
        {/* /.container */}
      </div>
      {/* /.breadcrumb */}
      <div className="body-content">
        <div className="container">
          <div className="sign-in-page" >
            <div className="row">
              {/* Sign-in */}
              <div className="col-md-6 col-sm-6 sign-in">
                <h4 className="">Sign in</h4>
                <p className="">Hello, Welcome to your account.</p>
                <div className="social-sign-in outer-top-xs">
                  <a href="#" className="facebook-sign-in">
                    <i className="fa fa-facebook" /> Sign In with Facebook
                  </a>
                  <a href="#" className="twitter-sign-in">
                    <i className="fa fa-twitter" /> Sign In with Twitter
                  </a>
                </div>
                {/* signin form */}
                <form className="register-form outer-top-xs" role="form"onSubmit={handleSubmit(onSubmit1)} >
                  <div className="form-group">
                    <label className="info-title" htmlFor="email">
                      Email Address <span>*</span>
                    </label>
                    <input name='email'
                   {...register("email",{required:true})}
                      type="email"
                      className="form-control unicase-form-control text-input"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="password1">
                      Password <span>*</span>
                    </label>
                    <input name='password'
                    {...register("password",{required:"This is required",maxLength:{value:20,message:"max-length-20"},minLength:{value:2,message:"min length is 2"}})}
                      type="password"
                      className="form-control unicase-form-control text-input"
                      id="password1"
                    />
                  </div>
                  <div className="radio outer-xs">
                    <label>
                      <input 
                        type="radio"
                        name="optionsRadios"
                        id="optionsRadios2"
                        defaultValue="option2"
                      />
                      Remember me!
                    </label>
                    <a href="#" className="forgot-password pull-right">
                      Forgot your Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="btn-upper btn btn-primary checkout-page-button"
                  >
                    Login
                  </button>
                </form>
              </div>
              {/* Sign-in */}
              {/* create a new account */}
              <div className="col-md-6 col-sm-6 create-new-account">
                <h4 className="checkout-subtitle">Create a new account</h4>
                <p className="text title-tag-line">Create your new account.</p>
                {/* signup form */}
                <form method='Post'  className="register-form outer-top-xs" role="form" onSubmit={handleSubmit2(onSubmit)}>
                  <div className="form-group">
                    <label className="info-title" htmlFor="email1">
                      Email Address <span>*</span>
                    </label>
                    <input name="email"
                    {...register2("email",{required:true})}
                      type="email"
                      className="form-control unicase-form-control text-input"
                      id="email1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="firstname">
                     firstname <span>*</span>
                    </label>
                    <input name='firstname'
                    {...register2("firstname",{required:"This is required",maxLength:{value:20,message:"max-length-20"},minLength:{value:2,message:"min length is 2"}})}
                      type="text"
                      className="form-control unicase-form-control text-input"
                      id="firstname"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="lastname">
                     lastname <span>*</span>
                    </label>
                    <input name='lastname'
                    {...register2("lastname",{required:"This is required",maxLength:{value:20,message:"max-length-20"},minLength:{value:2,message:"min length is 2"}})}
                      type="text"
                      className="form-control unicase-form-control text-input"
                      id="lastname"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>
                    <input name='mobilenumber'
                    {...register2("phone",{required:"This is required",maxLength:{value:20,message:"max-length-20"},minLength:{value:2,message:"min length is 2"}})} type="text"
                      className="form-control unicase-form-control text-input"
                      id="phone"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="password">
                      Password <span>*</span>
                    </label>
                    <input name='password'
                    {...register2("password",{required:"This is required",maxLength:{value:20,message:"max-length-20"},minLength:{value:2,message:"min length is 2"}})} 
                      type="password"
                      className="form-control unicase-form-control text-input"
                      id="password"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="confirmpassword">
                      Confirm Password <span>*</span>
                    </label>
                    <input
                    {...register2("password",{required:"This is required",maxLength:{value:20,message:"max-length-20"},minLength:{value:2,message:"min length is 2"}})} 
                      type="password"
                      className="form-control unicase-form-control text-input"
                      id="confirmpassword"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-upper btn btn-primary checkout-page-button"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              {/* create a new account */}{" "}
            </div>
            {/* /.row */}
          </div>
          {/* /.sigin-in*/}
          {/* ============================================== BRANDS CAROUSEL ============================================== */}
          <div id="brands-carousel" className="logo-slider wow fadeInUp">
            <div className="logo-slider-inner">
              <div
                id="brand-slider"
                className="owl-carousel brand-slider custom-carousel owl-theme"
              >
                <div className="item m-t-15">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand1.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item m-t-10">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand2.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand3.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand4.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand5.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand6.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand2.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand4.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand1.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="assets/images/brands/brand5.png"
                      src="assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
              </div>
              {/* /.owl-carousel #logo-slider */}
            </div>
            {/* /.logo-slider-inner */}
          </div>
          {/* /.logo-slider */}
          {/* ============================================== BRANDS CAROUSEL : END ============================================== */}{" "}
        </div>
        {/* /.container */}
      </div>
      {/* /.body-content */}
      {props.footer}
    </>
  )}
  
