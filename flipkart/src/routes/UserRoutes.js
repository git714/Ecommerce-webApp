import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import { useEffect, useState } from 'react';
import axios from 'axios';
import TheNavbar from "../components/TheNavbar";

import{ TheFooter} from "../components/TheFooter";
// import { Home} from "../pages/Home";
import { Checkout } from '../pages/Checkout';
import { Signin} from '../pages/Signin';
import { Blog} from '../pages/Blog';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Details } from '../pages/Details';
import { FAQ } from '../pages/FAQ';
import { Mywishlist } from '../pages/Mywishlist';
import { ProductComparison } from '../pages/ProductComparison';
import { ShoppingCart} from '../pages/ShoppingCart';
import { TermsConditions } from '../pages/TermsConditions';
import { TrackOrders } from '../pages/TrackOrders';
import { Page404 } from '../pages/Page404';
import { Adminsignin } from '../admin/Adminsignin';
import Dashboard from '../admin/Admindashboard/Dashboard';
import { Category } from '../admin/Admindashboard/component/category/Category';
import { Addcategory } from '../admin/Admindashboard/component/category/Addcategory';
import { Updatecategory } from '../admin/Admindashboard/component/category/Updatecategory';
import {Product } from '../admin/Admindashboard/component/products/Product';
import {Addproduct } from '../admin/Admindashboard/component/products/Addproduct';
import {Updateproduct } from '../admin/Admindashboard/component/products/Updateproduct';

  
export function UserRoutes() {
  const [category,setCategory]=useState([])
  const getRepo=()=>{ 
    axios.get('http://localhost:5000/users/category/find')
       .then((res) => {
         console.log(res);
         const categories=res.data;
         setCategory(categories);
         
       })
       .catch(function (error) {
           console.log(error);
       })
      
     }
  useEffect(()=>{
    getRepo();
   
  },[])
  
    return (
      
      <Router>
        {/* <TheNavbar/> */}
       
          <Routes>
          
             <Route path='/'  element={<Home header={<TheNavbar/>} footer={<TheFooter/>} category={category}/>} />
             {/*  admin*/}
             
             <Route path='/admin' element={<Adminsignin/>}/>
             <Route path='/admindashboard' element={<Dashboard/>}/>
             <Route path='/category' element={<Category/>}/>
             <Route path='/addcategory' element={<Addcategory/>}/>
             <Route path='/updatecategory/:id' element={<Updatecategory/>}/>

             <Route path='/product' element={<Product/>}/>
             <Route path='/addproduct' element={<Addproduct category={category}/>}/>
             <Route path='/updateproduct/:id' element={<Updateproduct category={category}/>} />

            

             {/*  adminroutes end*/}

             <Route path='/checkout' element={<Checkout header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/signin' element={<Signin header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/blog' element={<Blog header={<TheNavbar/>} footer={<TheFooter/>}/>} />

             {/* <Route path='/category' element={<Category header={<TheNavbar/>} footer={<TheFooter/>}/>}/> */}

             <Route path='/contact' element={<Contact header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/details' element={<Details header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/faq' element={<FAQ header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/mywishlist' element={<Mywishlist header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/productcomparison' element={<ProductComparison header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/shoppingcart' element={<ShoppingCart header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/termsconditions' element={<TermsConditions header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/trackorders' element={<TrackOrders header={<TheNavbar/>} footer={<TheFooter/>}/>}/>

             <Route path='/page404' element={<Page404 header={<TheNavbar/>} footer={<TheFooter/>}/>}/>
        
          </Routes>
        
      </Router>
      
      
    );
  }
  

  
