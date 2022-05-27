import { useContext,useEffect,useState } from "react";
import { ReactContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import Spinner from "../components/Spinner";
export const Home = (props) =>{
  const dispatch=useDispatch()
  const data=useContext(ReactContext)
  const [productCategory,setProductCategory]=useState("clothing");
  const [products,setProducts]=useState();
  useEffect(()=>{
    // data.getProduct();
    data.getCategory();
    getProductByCategory(productCategory);

  },[productCategory]);

  const handleAdd=(product)=>{
    dispatch(add(product));

  }

   
 const getProductByCategory=(productCategory)=>{
  productCategory=localStorage.getItem("productCategory")

  axios.get(`http://localhost:5000/users/products/${productCategory}`)
               .then((res) => {
                //  console.log(res);
                 const products=res.data;
                 console.log(products);
                 setProducts(products);
                 
               })
               .catch(function (error) {
                   console.log(error);
               })
 }
  
  const categoryload=()=>{


    if(data.category.length>0 && products){
  return(
  <>
  
 {props.header}


    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb-inner">
          <ul className="list-inline list-unstyled">
            <li>
              <a href="#">Home</a>
            </li>
            {/* <li className="active">Handbags</li> */}
          </ul>
        </div>
        {/* /.breadcrumb-inner */}
      </div>
      {/* /.container */}
    </div>
    {/* /.breadcrumb */}
    <div className="body-content outer-top-xs" >
      <div className="container">
        <div className="row">
          <div className="col-md-3 sidebar">
            {/* ================================== TOP NAVIGATION ================================== */}
            <div className="side-menu animate-dropdown outer-bottom-xs">
              <div className="head">
                <i className="icon fa fa-align-justify fa-fw" /> Categories
              </div>
              <nav className="yamm megamenu-horizontal">
                <ul className="nav">
                  <li className="dropdown menu-item">
                    {" "}
                    <a
                      onClick={()=>{const newCategory=data.category[0].name ;setProductCategory(newCategory);
                     
                        getProductByCategory(newCategory);
                        localStorage.setItem("productCategory",newCategory)
                        getProductByCategory(newCategory);}}
                        
                        
                     
                    >
                      <i
                        className="icon fa fa-shopping-bag"
                        aria-hidden="true"
                      />
                   {data.category[0].name.charAt(0).toUpperCase()+data.category[0].name.slice(1).toLowerCase()}
                    </a>
                    <ul className="dropdown-menu mega-menu">
                      <li className="yamm-content">
                        <div className="row">
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Dresses</a>
                              </li>
                              <li>
                                <a href="#">Shoes </a>
                              </li>
                              <li>
                                <a href="#">Jackets</a>
                              </li>
                              <li>
                                <a href="#">Sunglasses</a>
                              </li>
                              <li>
                                <a href="#">Sport Wear</a>
                              </li>
                              <li>
                                <a href="#">Blazers</a>
                              </li>
                              <li>
                                <a href="#">Shirts</a>
                              </li>
                              <li>
                                <a href="#">Shorts</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Handbags</a>
                              </li>
                              <li>
                                <a href="#">Jwellery</a>
                              </li>
                              <li>
                                <a href="#">Swimwear </a>
                              </li>
                              <li>
                                <a href="#">Tops</a>
                              </li>
                              <li>
                                <a href="#">Flats</a>
                              </li>
                              <li>
                                <a href="#">Shoes</a>
                              </li>
                              <li>
                                <a href="#">Winter Wear</a>
                              </li>
                              <li>
                                <a href="#">Night Suits</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Toys &amp; Games</a>
                              </li>
                              <li>
                                <a href="#">Jeans</a>
                              </li>
                              <li>
                                <a href="#">Shirts</a>
                              </li>
                              <li>
                                <a href="#">Shoes</a>
                              </li>
                              <li>
                                <a href="#">School Bags</a>
                              </li>
                              <li>
                                <a href="#">Lunch Box</a>
                              </li>
                              <li>
                                <a href="#">Footwear</a>
                              </li>
                              <li>
                                <a href="#">Wipes</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Sandals </a>
                              </li>
                              <li>
                                <a href="#">Shorts</a>
                              </li>
                              <li>
                                <a href="#">Dresses</a>
                              </li>
                              <li>
                                <a href="#">Jwellery</a>
                              </li>
                              <li>
                                <a href="#">Bags</a>
                              </li>
                              <li>
                                <a href="#">Night Dress</a>
                              </li>
                              <li>
                                <a href="#">Swim Wear</a>
                              </li>
                              <li>
                                <a href="#">Toys</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                        </div>
                        {/* /.row */}
                      </li>
                      {/* /.yamm-content */}
                    </ul>
                    {/* /.dropdown-menu */}{" "}
                  </li>
                  {/* /.menu-item */}
                  <li className="dropdown menu-item">
                    {" "}
                    <a
                       onClick={()=>{const newCategory=data.category[1].name ;setProductCategory(newCategory);
                        localStorage.setItem("productCategory",newCategory)
                        getProductByCategory(newCategory);}}
                       
                        
                      
                    >
                      <i className="icon fa fa-laptop" aria-hidden="true" />
                      {data.category[1].name.charAt(0).toUpperCase()+data.category[1].name.slice(1).toLowerCase()}
                    </a>
                    {/* ================================== MEGAMENU VERTICAL ================================== */}
                    <ul className="dropdown-menu mega-menu">
                      <li className="yamm-content">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-4">
                            <ul>
                              <li>
                                <a href="#">Gaming</a>
                              </li>
                              <li>
                                <a href="#">Laptop Skins</a>
                              </li>
                              <li>
                                <a href="#">Apple</a>
                              </li>
                              <li>
                                <a href="#">Dell</a>
                              </li>
                              <li>
                                <a href="#">Lenovo</a>
                              </li>
                              <li>
                                <a href="#">Microsoft</a>
                              </li>
                              <li>
                                <a href="#">Asus</a>
                              </li>
                              <li>
                                <a href="#">Adapters</a>
                              </li>
                              <li>
                                <a href="#">Batteries</a>
                              </li>
                              <li>
                                <a href="#">Cooling Pads</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-lg-4">
                            <ul>
                              <li>
                                <a href="#">Routers &amp; Modems</a>
                              </li>
                              <li>
                                <a href="#">CPUs, Processors</a>
                              </li>
                              <li>
                                <a href="#">PC Gaming Store</a>
                              </li>
                              <li>
                                <a href="#">Graphics Cards</a>
                              </li>
                              <li>
                                <a href="#">Components</a>
                              </li>
                              <li>
                                <a href="#">Webcam</a>
                              </li>
                              <li>
                                <a href="#">Memory (RAM)</a>
                              </li>
                              <li>
                                <a href="#">Motherboards</a>
                              </li>
                              <li>
                                <a href="#">Keyboards</a>
                              </li>
                              <li>
                                <a href="#">Headphones</a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-banner-holder">
                            {" "}
                            <a href="#">
                              <img
                                alt=""
                                src="assets/images/banners/banner-side.png"
                              />
                            </a>{" "}
                          </div>
                        </div>
                        {/* /.row */}
                      </li>
                      {/* /.yamm-content */}
                    </ul>
                    {/* /.dropdown-menu */}
                    {/* ================================== MEGAMENU VERTICAL ================================== */}{" "}
                  </li>
                  {/* /.menu-item */}
                  <li className="dropdown menu-item">
                    {" "}
                    <a
                       onClick={()=>{const newCategory=data.category[2].name ;setProductCategory(newCategory);
                        localStorage.setItem("productCategory",newCategory)
                        getProductByCategory(newCategory);}}
                        
                     
                    >
                      <i className="icon fa fa-paw" aria-hidden="true" />
                      {data.category[2].name.charAt(0).toUpperCase()+data.category[2].name.slice(1).toLowerCase()}
                    </a>
                    <ul className="dropdown-menu mega-menu">
                      <li className="yamm-content">
                        <div className="row">
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Dresses</a>
                              </li>
                              <li>
                                <a href="#">Shoes </a>
                              </li>
                              <li>
                                <a href="#">Jackets</a>
                              </li>
                              <li>
                                <a href="#">Sunglasses</a>
                              </li>
                              <li>
                                <a href="#">Sport Wear</a>
                              </li>
                              <li>
                                <a href="#">Blazers</a>
                              </li>
                              <li>
                                <a href="#">Shirts</a>
                              </li>
                              <li>
                                <a href="#">Shorts</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Handbags</a>
                              </li>
                              <li>
                                <a href="#">Jwellery</a>
                              </li>
                              <li>
                                <a href="#">Swimwear </a>
                              </li>
                              <li>
                                <a href="#">Tops</a>
                              </li>
                              <li>
                                <a href="#">Flats</a>
                              </li>
                              <li>
                                <a href="#">Shoes</a>
                              </li>
                              <li>
                                <a href="#">Winter Wear</a>
                              </li>
                              <li>
                                <a href="#">Night Suits</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Toys &amp; Games</a>
                              </li>
                              <li>
                                <a href="#">Jeans</a>
                              </li>
                              <li>
                                <a href="#">Shirts</a>
                              </li>
                              <li>
                                <a href="#">Shoes</a>
                              </li>
                              <li>
                                <a href="#">School Bags</a>
                              </li>
                              <li>
                                <a href="#">Lunch Box</a>
                              </li>
                              <li>
                                <a href="#">Footwear</a>
                              </li>
                              <li>
                                <a href="#">Wipes</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Sandals </a>
                              </li>
                              <li>
                                <a href="#">Shorts</a>
                              </li>
                              <li>
                                <a href="#">Dresses</a>
                              </li>
                              <li>
                                <a href="#">Jwellery</a>
                              </li>
                              <li>
                                <a href="#">Bags</a>
                              </li>
                              <li>
                                <a href="#">Night Dress</a>
                              </li>
                              <li>
                                <a href="#">Swim Wear</a>
                              </li>
                              <li>
                                <a href="#">Toys</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                        </div>
                        {/* /.row */}
                      </li>
                      {/* /.yamm-content */}
                    </ul>
                    {/* /.dropdown-menu */}{" "}
                  </li>
                  {/* /.menu-item */}
                  <li className="dropdown menu-item">
                    {" "}
                    <a
                      onClick={()=>{const newCategory=data.category[3].name ;setProductCategory(newCategory);
                        localStorage.setItem("productCategory",newCategory)
                        getProductByCategory(newCategory);}}
                      
                    >
                      <i className="icon fa fa-clock-o" />
                      {data.category[3].name.charAt(0).toUpperCase()+data.category[3].name.slice(1).toLowerCase()}
                    </a>
                    <ul className="dropdown-menu mega-menu">
                      <li className="yamm-content">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-4">
                            <ul>
                              <li>
                                <a href="#">Gaming</a>
                              </li>
                              <li>
                                <a href="#">Laptop Skins</a>
                              </li>
                              <li>
                                <a href="#">Apple</a>
                              </li>
                              <li>
                                <a href="#">Dell</a>
                              </li>
                              <li>
                                <a href="#">Lenovo</a>
                              </li>
                              <li>
                                <a href="#">Microsoft</a>
                              </li>
                              <li>
                                <a href="#">Asus</a>
                              </li>
                              <li>
                                <a href="#">Adapters</a>
                              </li>
                              <li>
                                <a href="#">Batteries</a>
                              </li>
                              <li>
                                <a href="#">Cooling Pads</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-lg-4">
                            <ul>
                              <li>
                                <a href="#">Routers &amp; Modems</a>
                              </li>
                              <li>
                                <a href="#">CPUs, Processors</a>
                              </li>
                              <li>
                                <a href="#">PC Gaming Store</a>
                              </li>
                              <li>
                                <a href="#">Graphics Cards</a>
                              </li>
                              <li>
                                <a href="#">Components</a>
                              </li>
                              <li>
                                <a href="#">Webcam</a>
                              </li>
                              <li>
                                <a href="#">Memory (RAM)</a>
                              </li>
                              <li>
                                <a href="#">Motherboards</a>
                              </li>
                              <li>
                                <a href="#">Keyboards</a>
                              </li>
                              <li>
                                <a href="#">Headphones</a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-banner-holder">
                            {" "}
                            <a href="#">
                              <img
                                alt=""
                                src="assets/images/banners/banner-side.png"
                              />
                            </a>{" "}
                          </div>
                        </div>
                        {/* /.row */}
                      </li>
                      {/* /.yamm-content */}
                    </ul>
                    {/* /.dropdown-menu */}{" "}
                  </li>
                  {/* /.menu-item */}
                  <li className="dropdown menu-item">
                    {" "}
                    <a
                       onClick={()=>{const newCategory=data.category[4].name ;setProductCategory(newCategory);
                        localStorage.setItem("productCategory",newCategory)
                        getProductByCategory(newCategory);}}
                    >
                      <i className="icon fa fa-diamond" />
                      {data.category[4].name.charAt(0).toUpperCase()+data.category[4].name.slice(1).toLowerCase()}
                    </a>
                    <ul className="dropdown-menu mega-menu">
                      <li className="yamm-content">
                        <div className="row">
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Dresses</a>
                              </li>
                              <li>
                                <a href="#">Shoes </a>
                              </li>
                              <li>
                                <a href="#">Jackets</a>
                              </li>
                              <li>
                                <a href="#">Sunglasses</a>
                              </li>
                              <li>
                                <a href="#">Sport Wear</a>
                              </li>
                              <li>
                                <a href="#">Blazers</a>
                              </li>
                              <li>
                                <a href="#">Shirts</a>
                              </li>
                              <li>
                                <a href="#">Shorts</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Handbags</a>
                              </li>
                              <li>
                                <a href="#">Jwellery</a>
                              </li>
                              <li>
                                <a href="#">Swimwear </a>
                              </li>
                              <li>
                                <a href="#">Tops</a>
                              </li>
                              <li>
                                <a href="#">Flats</a>
                              </li>
                              <li>
                                <a href="#">Shoes</a>
                              </li>
                              <li>
                                <a href="#">Winter Wear</a>
                              </li>
                              <li>
                                <a href="#">Night Suits</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Toys &amp; Games</a>
                              </li>
                              <li>
                                <a href="#">Jeans</a>
                              </li>
                              <li>
                                <a href="#">Shirts</a>
                              </li>
                              <li>
                                <a href="#">Shoes</a>
                              </li>
                              <li>
                                <a href="#">School Bags</a>
                              </li>
                              <li>
                                <a href="#">Lunch Box</a>
                              </li>
                              <li>
                                <a href="#">Footwear</a>
                              </li>
                              <li>
                                <a href="#">Wipes</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                          <div className="col-sm-12 col-md-3">
                            <ul className="links list-unstyled">
                              <li>
                                <a href="#">Sandals </a>
                              </li>
                              <li>
                                <a href="#">Shorts</a>
                              </li>
                              <li>
                                <a href="#">Dresses</a>
                              </li>
                              <li>
                                <a href="#">Jwellery</a>
                              </li>
                              <li>
                                <a href="#">Bags</a>
                              </li>
                              <li>
                                <a href="#">Night Dress</a>
                              </li>
                              <li>
                                <a href="#">Swim Wear</a>
                              </li>
                              <li>
                                <a href="#">Toys</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.col */}
                        </div>
                        {/* /.row */}
                      </li>
                      {/* /.yamm-content */}
                    </ul>
                    {/* /.dropdown-menu */}{" "}
                  </li>
                  {/* /.menu-item */}
                  <li className="dropdown menu-item">
                    {" "}
                    <a
                       onClick={()=>{const newCategory=data.category[5].name ;setProductCategory(newCategory);
                        localStorage.setItem("productCategory",newCategory)
                        getProductByCategory(newCategory);}}
                      
                    >
                      <i className="icon fa fa-heartbeat" />
                      {data.category[5].name.charAt(0).toUpperCase()+data.category[5].name.slice(1).toLowerCase()}
                    </a>
                    <ul className="dropdown-menu mega-menu">
                      <li className="yamm-content">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-lg-4">
                            <ul>
                              <li>
                                <a href="#">Gaming</a>
                              </li>
                              <li>
                                <a href="#">Laptop Skins</a>
                              </li>
                              <li>
                                <a href="#">Apple</a>
                              </li>
                              <li>
                                <a href="#">Dell</a>
                              </li>
                              <li>
                                <a href="#">Lenovo</a>
                              </li>
                              <li>
                                <a href="#">Microsoft</a>
                              </li>
                              <li>
                                <a href="#">Asus</a>
                              </li>
                              <li>
                                <a href="#">Adapters</a>
                              </li>
                              <li>
                                <a href="#">Batteries</a>
                              </li>
                              <li>
                                <a href="#">Cooling Pads</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-lg-4">
                            <ul>
                              <li>
                                <a href="#">Routers &amp; Modems</a>
                              </li>
                              <li>
                                <a href="#">CPUs, Processors</a>
                              </li>
                              <li>
                                <a href="#">PC Gaming Store</a>
                              </li>
                              <li>
                                <a href="#">Graphics Cards</a>
                              </li>
                              <li>
                                <a href="#">Components</a>
                              </li>
                              <li>
                                <a href="#">Webcam</a>
                              </li>
                              <li>
                                <a href="#">Memory (RAM)</a>
                              </li>
                              <li>
                                <a href="#">Motherboards</a>
                              </li>
                              <li>
                                <a href="#">Keyboards</a>
                              </li>
                              <li>
                                <a href="#">Headphones</a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-banner-holder">
                            {" "}
                            <a href="#">
                              <img
                                alt=""
                                src="assets/images/banners/banner-side.png"
                              />
                            </a>{" "}
                          </div>
                        </div>
                        {/* /.row */}
                      </li>
                      {/* /.yamm-content */}
                    </ul>
                    {/* /.dropdown-menu */}{" "}
                  </li>
                  {/* /.menu-item */}
                  <li className="dropdown menu-item">
                    {" "}
                    <a
                       onClick={()=>{const newCategory=data.category[6].name ;setProductCategory(newCategory);
                        localStorage.setItem("productCategory",newCategory)
                        getProductByCategory(newCategory);}}
                      
                    >
                      <i className="icon fa fa-paper-plane" />
                      {data.category[6].name.charAt(0).toUpperCase()+data.category[6].name.slice(1).toLowerCase()}
                    </a>
                    {/* /.dropdown-menu */}{" "}
                  </li>
                  {/* /.menu-item */}
                  <li className="dropdown menu-item">
                    {" "}
                    <a
                       onClick={()=>{const newCategory=data.category[7].name ;setProductCategory(newCategory);
                        localStorage.setItem("productCategory",newCategory)
                        getProductByCategory(newCategory);}}
                      
                    >
                      <i className="icon fa fa-futbol-o" />
                      {data.category[7].name.charAt(0).toUpperCase()+data.category[7].name.slice(1).toLowerCase()}
                    </a>
                    {/* ================================== MEGAMENU VERTICAL ================================== */}
                    {/* /.dropdown-menu */}
                    {/* ================================== MEGAMENU VERTICAL ================================== */}{" "}
                  </li>
                  {/* /.menu-item */}
                  <li className="dropdown menu-item">
                    {" "}
                    <a
                       onClick={()=>{const newCategory=data.category[8].name ;setProductCategory(newCategory);
                        localStorage.setItem("productCategory",newCategory)
                        getProductByCategory(newCategory);}}
                      
                    >
                      <i className="icon fa fa-envira" />
                      {data.category[8].name.charAt(0).toUpperCase()+data.category[8].name.slice(1).toLowerCase()}
                    </a>
                    {/* /.dropdown-menu */}{" "}
                  </li>
                  {/* /.menu-item */}
                </ul>
                {/* /.nav */}
              </nav>
              {/* /.megamenu-horizontal */}
            </div>
            {/* /.side-menu */}
            {/* ================================== TOP NAVIGATION : END ================================== */}
            <div className="sidebar-module-container">
              <div className="sidebar-filter">
                {/* ============================================== SIDEBAR CATEGORY ============================================== */}
                <div className="sidebar-widget wow fadeInUp">
                  <h3 className="section-title">shop by</h3>
                  <div className="widget-header">
                    <h4 className="widget-title">Category</h4>
                  </div>
                  <div className="sidebar-widget-body">
                    <div className="accordion">
                      <div className="accordion-group">
                        <div className="accordion-heading">
                          {" "}
                          <a
                            href="#collapseOne"
                            data-toggle="collapse"
                            className="accordion-toggle collapsed"
                          >
                            {" "}
                            Camera{" "}
                          </a>{" "}
                        </div>
                        {/* /.accordion-heading */}
                        <div
                          className="accordion-body collapse"
                          id="collapseOne"
                          style={{ height: 0 }}
                        >
                          <div className="accordion-inner">
                            <ul>
                              <li>
                                <a href="#">gaming</a>
                              </li>
                              <li>
                                <a href="#">office</a>
                              </li>
                              <li>
                                <a href="#">kids</a>
                              </li>
                              <li>
                                <a href="#">for women</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.accordion-inner */}
                        </div>
                        {/* /.accordion-body */}
                      </div>
                      {/* /.accordion-group */}
                      <div className="accordion-group">
                        <div className="accordion-heading">
                          {" "}
                          <a
                            href="#collapseTwo"
                            data-toggle="collapse"
                            className="accordion-toggle collapsed"
                          >
                            {" "}
                            Desktops{" "}
                          </a>{" "}
                        </div>
                        {/* /.accordion-heading */}
                        <div
                          className="accordion-body collapse"
                          id="collapseTwo"
                          style={{ height: 0 }}
                        >
                          <div className="accordion-inner">
                            <ul>
                              <li>
                                <a href="#">gaming</a>
                              </li>
                              <li>
                                <a href="#">office</a>
                              </li>
                              <li>
                                <a href="#">kids</a>
                              </li>
                              <li>
                                <a href="#">for women</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.accordion-inner */}
                        </div>
                        {/* /.accordion-body */}
                      </div>
                      {/* /.accordion-group */}
                      <div className="accordion-group">
                        <div className="accordion-heading">
                          {" "}
                          <a
                            href="#collapseThree"
                            data-toggle="collapse"
                            className="accordion-toggle collapsed"
                          >
                            {" "}
                            Pants{" "}
                          </a>{" "}
                        </div>
                        {/* /.accordion-heading */}
                        <div
                          className="accordion-body collapse"
                          id="collapseThree"
                          style={{ height: 0 }}
                        >
                          <div className="accordion-inner">
                            <ul>
                              <li>
                                <a href="#">gaming</a>
                              </li>
                              <li>
                                <a href="#">office</a>
                              </li>
                              <li>
                                <a href="#">kids</a>
                              </li>
                              <li>
                                <a href="#">for women</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.accordion-inner */}
                        </div>
                        {/* /.accordion-body */}
                      </div>
                      {/* /.accordion-group */}
                      <div className="accordion-group">
                        <div className="accordion-heading">
                          {" "}
                          <a
                            href="#collapseFour"
                            data-toggle="collapse"
                            className="accordion-toggle collapsed"
                          >
                            {" "}
                            Bags{" "}
                          </a>{" "}
                        </div>
                        {/* /.accordion-heading */}
                        <div
                          className="accordion-body collapse"
                          id="collapseFour"
                          style={{ height: 0 }}
                        >
                          <div className="accordion-inner">
                            <ul>
                              <li>
                                <a href="#">gaming</a>
                              </li>
                              <li>
                                <a href="#">office</a>
                              </li>
                              <li>
                                <a href="#">kids</a>
                              </li>
                              <li>
                                <a href="#">for women</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.accordion-inner */}
                        </div>
                        {/* /.accordion-body */}
                      </div>
                      {/* /.accordion-group */}
                      <div className="accordion-group">
                        <div className="accordion-heading">
                          {" "}
                          <a
                            href="#collapseFive"
                            data-toggle="collapse"
                            className="accordion-toggle collapsed"
                          >
                            {" "}
                            Hats{" "}
                          </a>{" "}
                        </div>
                        {/* /.accordion-heading */}
                        <div
                          className="accordion-body collapse"
                          id="collapseFive"
                          style={{ height: 0 }}
                        >
                          <div className="accordion-inner">
                            <ul>
                              <li>
                                <a href="#">gaming</a>
                              </li>
                              <li>
                                <a href="#">office</a>
                              </li>
                              <li>
                                <a href="#">kids</a>
                              </li>
                              <li>
                                <a href="#">for women</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.accordion-inner */}
                        </div>
                        {/* /.accordion-body */}
                      </div>
                      {/* /.accordion-group */}
                      <div className="accordion-group">
                        <div className="accordion-heading">
                          {" "}
                          <a
                            href="#collapseSix"
                            data-toggle="collapse"
                            className="accordion-toggle collapsed"
                          >
                            {" "}
                            Accessories{" "}
                          </a>{" "}
                        </div>
                        {/* /.accordion-heading */}
                        <div
                          className="accordion-body collapse"
                          id="collapseSix"
                          style={{ height: 0 }}
                        >
                          <div className="accordion-inner">
                            <ul>
                              <li>
                                <a href="#">gaming</a>
                              </li>
                              <li>
                                <a href="#">office</a>
                              </li>
                              <li>
                                <a href="#">kids</a>
                              </li>
                              <li>
                                <a href="#">for women</a>
                              </li>
                            </ul>
                          </div>
                          {/* /.accordion-inner */}
                        </div>
                        {/* /.accordion-body */}
                      </div>
                      {/* /.accordion-group */}
                    </div>
                    {/* /.accordion */}
                  </div>
                  {/* /.sidebar-widget-body */}
                </div>
                {/* /.sidebar-widget */}
                {/* ============================================== SIDEBAR CATEGORY : END ============================================== */}
                {/* ============================================== PRICE SILDER============================================== */}
                <div className="sidebar-widget wow fadeInUp">
                  <div className="widget-header">
                    <h4 className="widget-title">Price Slider</h4>
                  </div>
                  <div className="sidebar-widget-body m-t-10">
                    <div className="price-range-holder">
                      {" "}
                      <span className="min-max">
                        {" "}
                        <span className="pull-left">$200.00</span>{" "}
                        <span className="pull-right">$800.00</span>{" "}
                      </span>
                      <input
                        type="text"
                        id="amount"
                        style={{
                          border: 0,
                          color: "#666666",
                          fontWeight: "bold",
                          textAlign: "center"
                        }}
                      />
                      <input
                        type="text"
                        className="price-slider"
                        defaultValue=""
                      />
                    </div>
                    {/* /.price-range-holder */}
                    <a href="#" className="lnk btn btn-primary">
                      Show Now
                    </a>{" "}
                  </div>
                  {/* /.sidebar-widget-body */}
                </div>
                {/* /.sidebar-widget */}
                {/* ============================================== PRICE SILDER : END ============================================== */}
                {/* ============================================== MANUFACTURES============================================== */}
                <div className="sidebar-widget wow fadeInUp">
                  <div className="widget-header">
                    <h4 className="widget-title">Manufactures</h4>
                  </div>
                  <div className="sidebar-widget-body">
                    <ul className="list">
                      <li>
                        <a href="#">Forever 18</a>
                      </li>
                      <li>
                        <a href="#">Nike</a>
                      </li>
                      <li>
                        <a href="#">Dolce &amp; Gabbana</a>
                      </li>
                      <li>
                        <a href="#">Alluare</a>
                      </li>
                      <li>
                        <a href="#">Chanel</a>
                      </li>
                      <li>
                        <a href="#">Other Brand</a>
                      </li>
                    </ul>
                    {/*<a href="#" class="lnk btn btn-primary">Show Now</a>*/}
                  </div>
                  {/* /.sidebar-widget-body */}
                </div>
                {/* /.sidebar-widget */}
                {/* ============================================== MANUFACTURES: END ============================================== */}
                {/* ============================================== COLOR============================================== */}
                <div className="sidebar-widget wow fadeInUp">
                  <div className="widget-header">
                    <h4 className="widget-title">Colors</h4>
                  </div>
                  <div className="sidebar-widget-body">
                    <ul className="list">
                      <li>
                        <a href="#">Red</a>
                      </li>
                      <li>
                        <a href="#">Blue</a>
                      </li>
                      <li>
                        <a href="#">Yellow</a>
                      </li>
                      <li>
                        <a href="#">Pink</a>
                      </li>
                      <li>
                        <a href="#">Brown</a>
                      </li>
                      <li>
                        <a href="#">Teal</a>
                      </li>
                    </ul>
                  </div>
                  {/* /.sidebar-widget-body */}
                </div>
                {/* /.sidebar-widget */}
                {/* ============================================== COLOR: END ============================================== */}
                {/* ============================================== COMPARE============================================== */}
                <div className="sidebar-widget wow fadeInUp outer-top-vs">
                  <h3 className="section-title">Compare products</h3>
                  <div className="sidebar-widget-body">
                    <div className="compare-report">
                      <p>
                        You have no <span>item(s)</span> to compare
                      </p>
                    </div>
                    {/* /.compare-report */}
                  </div>
                  {/* /.sidebar-widget-body */}
                </div>
                {/* /.sidebar-widget */}
                {/* ============================================== COMPARE: END ============================================== */}
                {/* ============================================== PRODUCT TAGS ============================================== */}
                <div className="sidebar-widget product-tag wow fadeInUp outer-top-vs">
                  <h3 className="section-title">Product tags</h3>
                  <div className="sidebar-widget-body outer-top-xs">
                    <div className="tag-list">
                      {" "}
                      <a className="item" title="Phone" href="category.html">
                        Phone
                      </a>{" "}
                      <a
                        className="item active"
                        title="Vest"
                        href="category.html"
                      >
                        Vest
                      </a>{" "}
                      <a
                        className="item"
                        title="Smartphone"
                        href="category.html"
                      >
                        Smartphone
                      </a>{" "}
                      <a
                        className="item"
                        title="Furniture"
                        href="category.html"
                      >
                        Furniture
                      </a>{" "}
                      <a className="item" title="T-shirt" href="category.html">
                        T-shirt
                      </a>{" "}
                      <a
                        className="item"
                        title="Sweatpants"
                        href="category.html"
                      >
                        Sweatpants
                      </a>{" "}
                      <a className="item" title="Sneaker" href="category.html">
                        Sneaker
                      </a>{" "}
                      <a className="item" title="Toys" href="category.html">
                        Toys
                      </a>{" "}
                      <a className="item" title="Rose" href="category.html">
                        Rose
                      </a>{" "}
                    </div>
                    {/* /.tag-list */}
                  </div>
                  {/* /.sidebar-widget-body */}
                </div>
                {/* /.sidebar-widget */}
                {/*--------- Testimonials-----------*/}
                <div className="sidebar-widget  wow fadeInUp outer-top-vs ">
                  <div id="advertisement" className="advertisement">
                    <div className="item">
                      <div className="avatar">
                        <img
                          src="assets/images/testimonials/member1.png"
                          alt="Image"
                        />
                      </div>
                      <div className="testimonials">
                        <em>"</em> Vtae sodales aliq uam morbi non sem lacus
                        port mollis. Nunc condime tum metus eud molest sed
                        consectetuer.<em>"</em>
                      </div>
                      <div className="clients_author">
                        John Doe <span>Abc Company</span>{" "}
                      </div>
                      {/* /.container-fluid */}
                    </div>
                    {/* /.item */}
                    <div className="item">
                      <div className="avatar">
                        <img
                          src="assets/images/testimonials/member3.png"
                          alt="Image"
                        />
                      </div>
                      <div className="testimonials">
                        <em>"</em>Vtae sodales aliq uam morbi non sem lacus port
                        mollis. Nunc condime tum metus eud molest sed
                        consectetuer.<em>"</em>
                      </div>
                      <div className="clients_author">
                        Stephen Doe <span>Xperia Designs</span>{" "}
                      </div>
                    </div>
                    {/* /.item */}
                    <div className="item">
                      <div className="avatar">
                        <img
                          src="assets/images/testimonials/member2.png"
                          alt="Image"
                        />
                      </div>
                      <div className="testimonials">
                        <em>"</em> Vtae sodales aliq uam morbi non sem lacus
                        port mollis. Nunc condime tum metus eud molest sed
                        consectetuer.<em>"</em>
                      </div>
                      <div className="clients_author">
                        Saraha Smith <span>Datsun &amp; Co</span>{" "}
                      </div>
                      {/* /.container-fluid */}
                    </div>
                    {/* /.item */}
                  </div>
                  {/* /.owl-carousel */}
                </div>
                {/* ============================================== Testimonials: END ============================================== */}
                <div className="home-banner">
                  {" "}
                  <img
                    src="assets/images/banners/LHS-banner.jpg"
                    alt="Image"
                  />{" "}
                </div>
              </div>
              {/* /.sidebar-filter */}
            </div>
            {/* /.sidebar-module-container */}
          </div>
          {/* /.sidebar */}
          <div className="col-md-9">
            {/* ========================================== SECTION – HERO ========================================= */}
            <div id="category" className="category-carousel hidden-xs">
              <div className="item">
                <div className="image">
                  {" "}
                  <img
                    src="assets/images/banners/cat-banner-1.jpg"
                    alt=""
                    className="img-responsive"
                  />{" "}
                </div>
                <div className="container-fluid">
                  <div className="caption vertical-top text-left">
                    <div className="big-text"> Big Sale </div>
                    <div className="excerpt hidden-sm hidden-md">
                      {" "}
                      Save up to 49% off{" "}
                    </div>
                    <div className="excerpt-normal hidden-sm hidden-md">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
                    </div>
                  </div>
                  {/* /.caption */}
                </div>
                {/* /.container-fluid */}
              </div>
            </div>
            <div className="clearfix filters-container m-t-10">
              <div className="row">
                <div className="col col-sm-6 col-md-2">
                  <div className="filter-tabs">
                    <ul
                      id="filter-tabs"
                      className="nav nav-tabs nav-tab-box nav-tab-fa-icon"
                    >
                      <li className="active">
                        {" "}
                        <a data-toggle="tab" href="#grid-container">
                          <i className="icon fa fa-th-large" />
                          Grid
                        </a>{" "}
                      </li>
                      <li>
                        <a data-toggle="tab" href="#list-container">
                          <i className="icon fa fa-th-list" />
                          List
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.filter-tabs */}
                </div>
                {/* /.col */}
                <div className="col col-sm-12 col-md-6">
                  <div className="col col-sm-3 col-md-6 no-padding">
                    <div className="lbl-cnt">
                      {" "}
                      <span className="lbl">Sort by</span>
                      <div className="fld inline">
                        <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                          <button
                            data-toggle="dropdown"
                            type="button"
                            className="btn dropdown-toggle"
                          >
                            {" "}
                            Position <span className="caret" />{" "}
                          </button>
                          <ul role="menu" className="dropdown-menu">
                            <li role="presentation">
                              <a href="#">position</a>
                            </li>
                            <li role="presentation">
                              <a href="#">Price:Lowest first</a>
                            </li>
                            <li role="presentation">
                              <a href="#">Price:HIghest first</a>
                            </li>
                            <li role="presentation">
                              <a href="#">Product Name:A to Z</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.fld */}
                    </div>
                    {/* /.lbl-cnt */}
                  </div>
                  {/* /.col */}
                  <div className="col col-sm-3 col-md-6 no-padding">
                    <div className="lbl-cnt">
                      {" "}
                      <span className="lbl">Show</span>
                      <div className="fld inline">
                        <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                          <button
                            data-toggle="dropdown"
                            type="button"
                            className="btn dropdown-toggle"
                          >
                            {" "}
                            1 <span className="caret" />{" "}
                          </button>
                          <ul role="menu" className="dropdown-menu">
                            <li role="presentation">
                              <a href="#">1</a>
                            </li>
                            <li role="presentation">
                              <a href="#">2</a>
                            </li>
                            <li role="presentation">
                              <a href="#">3</a>
                            </li>
                            <li role="presentation">
                              <a href="#">4</a>
                            </li>
                            <li role="presentation">
                              <a href="#">5</a>
                            </li>
                            <li role="presentation">
                              <a href="#">6</a>
                            </li>
                            <li role="presentation">
                              <a href="#">7</a>
                            </li>
                            <li role="presentation">
                              <a href="#">8</a>
                            </li>
                            <li role="presentation">
                              <a href="#">9</a>
                            </li>
                            <li role="presentation">
                              <a href="#">10</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.fld */}
                    </div>
                    {/* /.lbl-cnt */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.col */}
                <div className="col col-sm-6 col-md-4 text-right">
                  <div className="pagination-container">
                    <ul className="list-inline list-unstyled">
                      <li className="prev">
                        <a href="#">
                          <i className="fa fa-angle-left" />
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                    {/* /.list-inline */}
                  </div>
                  {/* /.pagination-container */}{" "}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            <div className="search-result-container ">
              <div id="myTabContent" className="tab-content category-list">
                <div className="tab-pane active " id="grid-container">
               
                  <div className="category-product">
                 
                    <div className="row">
                   

                    {products.map((product)=>{
                     return(<div key={product._id} className="col-sm-6 col-md-4 wow fadeInUp" style={{ visibility:"visible" }}>

                        <div className="products" style={{ visibility:"visible" }}>
                        
                          <div className="product">
                            <div className="product-image" style={{ visibility:"visible" }}>
                           
                              <div className="image" style={{ visibility:"visible" }}>
                                {" "}
                                <Link to={`/details/${product._id}`}>
                                  <img
                                    src={`http://localhost:5000/uploads/${product.file}`}
                                    alt="img" width={"50px"} height={"250px"}
                                  />
                                </Link>{" "}
                              </div>
                              {/* /.image */}
                              <div className="tag new">
                                <span>new</span>
                              </div>
                            </div>
                            {/* /.product-image */}
                            <div className="product-info text-left">
                              <h3 className="name">
                                <Link to={`/details${product._id}`}>{product.name}</Link>
                              </h3>
                              <div className="rating rateit-small" style={{ visibility:"visible" }}/>
                              <div className="description" />
                              <div className="product-price" style={{ visibility:"visible" }}>
                                {" "}
                                <span className="price" style={{ visibility:"visible" }}>{product.price}R.s</span>{" "}
                                <span className="price-before-discount">
                                {product.price+500}R.s
                                </span>{" "}
                             
                              </div>
                           
                           
                              {/* /.product-price */}
                            </div>
                         
                        
                            {/* /.product-info */}
                            <div className="cart clearfix animate-effect">
                              <div className="action">
                                <ul className="list-unstyled">
                                  <li className="add-cart-button btn-group">
                                    <button
                                      className="btn btn-primary icon"
                                      data-toggle="dropdown"
                                      type="button"
                                      onClick={()=>handleAdd(product)}
                                    >
                                      {" "}
                                      <i className="fa fa-shopping-cart" />{" "}
                                    </button>
                                    {/* <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      Add to cart
                                    </button> */}
                                  </li>
                                  <li className="lnk wishlist">
                                    {" "}
                                    <a
                                      className="add-to-cart"
                                      
                                      title="Wishlist"
                                    >
                                      {" "}
                                      <i className="icon fa fa-heart" />{" "}
                                    </a>{" "}
                                  </li>
                                  <li className="lnk">
                                    {" "}
                                    <a
                                      className="add-to-cart"
                                      
                                      title="Compare"
                                    >
                                      {" "}
                                      <i className="fa fa-signal" />{" "}
                                    </a>{" "}
                                  </li>
                                </ul>
                              </div>
                              {/* /.action */}
                            </div>
                            {/* /.cart */}
                          </div>
                         
                          {/* /.product */}
                        </div>
                     
                     
                        {/* /.products */}
                      </div>
                      ) })}
                    
                   
                       {/* my custom  */}
                      {/* /.item */}
                     
                       
                        
                      
                    
                      {/* /.item */}
                    </div>
                 
                
                  
                  
                    {/* /.row */}
                  </div>
                
                
                  {/* /
                  .category-product */}
                </div>
                {/* /.tab-pane */}
                <div className="tab-pane " id="list-container">
                  <div className="category-product">
                    
                   
                    {/* /.category-product-inner */}
                    <div className="category-product-inner wow fadeInUp">
                      <div className="products">
                        <div className="product-list product">
                          <div className="row product-list-row">
                            <div className="col col-sm-4 col-lg-4">
                              <div className="product-image">
                                <div className="image">
                                  {" "}
                                  <img
                                    src="assets/images/products/p5.jpg"
                                    alt=""
                                  />{" "}
                                </div>
                              </div>
                              {/* /.product-image */}
                            </div>
                            {/* /.col */}
                            <div className="col col-sm-8 col-lg-8">
                              <div className="product-info">
                                <h3 className="name">
                                  <a href="detail.html">
                                    Floral Print Buttoned
                                  </a>
                                </h3>
                                <div className="rating rateit-small" />
                                <div className="product-price">
                                  {" "}
                                  <span className="price"> $450.99 </span>{" "}
                                  <span className="price-before-discount">
                                    $ 800
                                  </span>{" "}
                                </div>
                                {/* /.product-price */}
                                <div className="description m-t-10">
                                  Suspendisse posuere arcu diam, id accumsan
                                  eros pharetra ac. Nulla enim risus, facilisis
                                  bibendum gravida eget, lacinia id purus.
                                  Suspendisse posuere arcu diam, id accumsan
                                  eros pharetra ac. Nulla enim risus, facilisis
                                  bibendum gravida eget.
                                </div>
                                <div className="cart clearfix animate-effect">
                                  <div className="action">
                                    <ul className="list-unstyled">
                                      <li className="add-cart-button btn-group">
                                        <button
                                          className="btn btn-primary icon"
                                          data-toggle="dropdown"
                                          type="button"
                                        >
                                          {" "}
                                          <i className="fa fa-shopping-cart" />{" "}
                                        </button>
                                        <button
                                          className="btn btn-primary cart-btn"
                                          type="button"
                                        >
                                          Add to cart
                                        </button>
                                      </li>
                                      <li className="lnk wishlist">
                                        {" "}
                                        <a
                                          className="add-to-cart"
                                          href="detail.html"
                                          title="Wishlist"
                                        >
                                          {" "}
                                          <i className="icon fa fa-heart" />{" "}
                                        </a>{" "}
                                      </li>
                                      <li className="lnk">
                                        {" "}
                                        <a
                                          className="add-to-cart"
                                          href="detail.html"
                                          title="Compare"
                                        >
                                          {" "}
                                          <i className="fa fa-signal" />{" "}
                                        </a>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  {/* /.action */}
                                </div>
                                {/* /.cart */}
                              </div>
                              {/* /.product-info */}
                            </div>
                            {/* /.col */}
                          </div>
                          {/* /.product-list-row */}
                          <div className="tag hot">
                            <span>hot</span>
                          </div>
                        </div>
                        {/* /.product-list */}
                      </div>
                      {/* /.products */}
                    </div>
                    
                   
                    {/* /.category-product-inner */}
                  </div>
                  {/* /.category-product */}
                </div>
                {/* /.tab-pane #list-container */}
              </div>
              {/* /.tab-content */}
              <div className="clearfix filters-container">
                <div className="text-right">
                  <div className="pagination-container">
                    <ul className="list-inline list-unstyled">
                      <li className="prev">
                        <a href="#">
                          <i className="fa fa-angle-left" />
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                    {/* /.list-inline */}
                  </div>
                  {/* /.pagination-container */}{" "}
                </div>
                {/* /.text-right */}
              </div>
              {/* /.filters-container */}
            </div>
            {/* /.search-result-container */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
       
      </div>
      {/* /.container */}
    </div>
    {/* /.body-content */}
    {props.footer}
    
  </>
  )
}
else{
  return (<Spinner/>)
}

  }
  return(
  <>
  {categoryload()}
  
  </>)

}
