import React,{useState,useEffect} from "react"
import { useParams} from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import Spinner from './../components/Spinner';


export const Details = (props) => {
  const [product,setProduct]=useState()
  const {id}=useParams();
  const dispatch=useDispatch();

const getProductByID=()=>{
 
  axios.get(`http://localhost:5000/users/product/${id}`).then((res) => {
    console.log(res);
    const product=res.data;
    setProduct(product);
    
  })
  .catch(function (error) {
      console.log(error);
  })

};

useEffect(()=>{
  getProductByID()
},[]);

const handleAdd=(product)=>{
  dispatch(add(product));
  console.log(product)
}



const productData=()=>{
  if(product)
{
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
              <li>
                <a href="#">{product.category}</a>
              </li>
              <li className="active">{product.name}</li>
            </ul>
          </div>
          {/* /.breadcrumb-inner */}
        </div>
        {/* /.container */}
      </div>
      {/* /.breadcrumb */}
      <div className="body-content outer-top-xs" >
        <div className="container">
          <div className="row single-product">
            <div className="col-md-3 sidebar">
              <div className="sidebar-module-container">
                <div className="home-banner outer-top-n">
                  <img src="/assets/images/banners/LHS-banner.jpg" alt="Image" />
                </div>
                {/* ============================================== HOT DEALS ============================================== */}
                <div className="sidebar-widget hot-deals wow fadeInUp outer-top-vs">
                  <h3 className="section-title">hot deals</h3>
                  <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-xs">
                    <div className="item">
                      <div className="products">
                        <div className="hot-deal-wrapper">
                          <div className="image">
                            <img src="/assets/images/hot-deals/p5.jpg" alt="" />
                          </div>
                          <div className="sale-offer-tag">
                            <span>
                              35%
                              <br />
                              off
                            </span>
                          </div>
                          <div className="timing-wrapper">
                            <div className="box-wrapper">
                              <div className="date box">
                                <span className="key">120</span>
                                <span className="value">Days</span>
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="hour box">
                                <span className="key">20</span>
                                <span className="value">HRS</span>
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="minutes box">
                                <span className="key">36</span>
                                <span className="value">MINS</span>
                              </div>
                            </div>
                            <div className="box-wrapper hidden-md">
                              <div className="seconds box">
                                <span className="key">60</span>
                                <span className="value">SEC</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.hot-deal-wrapper */}
                        <div className="product-info text-left m-t-20">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="product-price">
                            <span className="price">$600.00</span>
                            <span className="price-before-discount">$800.00</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <div className="add-cart-button btn-group">
                              <button
                                className="btn btn-primary icon"
                                data-toggle="dropdown"
                                type="button"
                              >
                                <i className="fa fa-shopping-cart" />
                              </button>
                              <button
                                className="btn btn-primary cart-btn"
                                type="button"
                              >
                                Add to cart
                              </button>
                            </div>
                          </div>
                          {/* /.action */}
                        </div>
                        {/* /.cart */}
                      </div>
                    </div>
                    <div className="item">
                      <div className="products">
                        <div className="hot-deal-wrapper">
                          <div className="image">
                            <img src="/assets/images/products/p6.jpg" alt="" />
                          </div>
                          <div className="sale-offer-tag">
                            <span>
                              35%
                              <br />
                              off
                            </span>
                          </div>
                          <div className="timing-wrapper">
                            <div className="box-wrapper">
                              <div className="date box">
                                <span className="key">120</span>
                                <span className="value">Days</span>
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="hour box">
                                <span className="key">20</span>
                                <span className="value">HRS</span>
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="minutes box">
                                <span className="key">36</span>
                                <span className="value">MINS</span>
                              </div>
                            </div>
                            <div className="box-wrapper hidden-md">
                              <div className="seconds box">
                                <span className="key">60</span>
                                <span className="value">SEC</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.hot-deal-wrapper */}
                        <div className="product-info text-left m-t-20">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="product-price">
                            <span className="price">$600.00</span>
                            <span className="price-before-discount">$800.00</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <div className="add-cart-button btn-group">
                              <button
                                className="btn btn-primary icon"
                                data-toggle="dropdown"
                                type="button"
                              >
                                <i className="fa fa-shopping-cart" />
                              </button>
                              <button
                                className="btn btn-primary cart-btn"
                                type="button"
                               
                              >
                                Add to cart
                              </button>
                            </div>
                          </div>
                          {/* /.action */}
                        </div>
                        {/* /.cart */}
                      </div>
                    </div>
                    <div className="item">
                      <div className="products">
                        <div className="hot-deal-wrapper">
                          <div className="image">
                            <img src="/assets/images/products/p7.jpg" alt="" />
                          </div>
                          <div className="sale-offer-tag">
                            <span>
                              35%
                              <br />
                              off
                            </span>
                          </div>
                          <div className="timing-wrapper">
                            <div className="box-wrapper">
                              <div className="date box">
                                <span className="key">120</span>
                                <span className="value">Days</span>
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="hour box">
                                <span className="key">20</span>
                                <span className="value">HRS</span>
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="minutes box">
                                <span className="key">36</span>
                                <span className="value">MINS</span>
                              </div>
                            </div>
                            <div className="box-wrapper hidden-md">
                              <div className="seconds box">
                                <span className="key">60</span>
                                <span className="value">SEC</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.hot-deal-wrapper */}
                        <div className="product-info text-left m-t-20">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="product-price">
                            <span className="price">$600.00</span>
                            <span className="price-before-discount">$800.00</span>
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <div className="add-cart-button btn-group">
                              <button
                                className="btn btn-primary icon"
                                data-toggle="dropdown"
                                type="button"
                              >
                                <i className="fa fa-shopping-cart" />
                              </button>
                              <button
                                className="btn btn-primary cart-btn"
                                type="button"
                              >
                                Add to cart
                              </button>
                            </div>
                          </div>
                          {/* /.action */}
                        </div>
                        {/* /.cart */}
                      </div>
                    </div>
                  </div>
                  {/* /.sidebar-widget */}
                </div>
                {/* ============================================== HOT DEALS: END ============================================== */}
                {/* ============================================== NEWSLETTER ============================================== */}
                <div className="sidebar-widget newsletter wow fadeInUp outer-bottom-small outer-top-vs">
                  <h3 className="section-title">Newsletters</h3>
                  <div className="sidebar-widget-body outer-top-xs">
                    <p>Sign Up for Our Newsletter!</p>
                    <form>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Subscribe to our newsletter"
                        />
                      </div>
                      <button className="btn btn-primary">Subscribe</button>
                    </form>
                  </div>
                  {/* /.sidebar-widget-body */}
                </div>
                {/* /.sidebar-widget */}
                {/* ============================================== NEWSLETTER: END ============================================== */}
                {/* ============================================== Testimonials============================================== */}
                <div className="sidebar-widget  wow fadeInUp outer-top-vs ">
                  <div id="advertisement" className="advertisement">
                    <div className="item">
                      <div className="avatar">
                        <img
                          src="/assets/images/testimonials/member1.png"
                          alt="Image"
                        />
                      </div>
                      <div className="testimonials">
                        <em>"</em> Vtae sodales aliq uam morbi non sem lacus port
                        mollis. Nunc condime tum metus eud molest sed
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
                          src="/assets/images/testimonials/member3.png"
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
                          src="/assets/images/testimonials/member2.png"
                          alt="Image"
                        />
                      </div>
                      <div className="testimonials">
                        <em>"</em> Vtae sodales aliq uam morbi non sem lacus port
                        mollis. Nunc condime tum metus eud molest sed
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
              </div>
            </div>
            {/* /.sidebar */}
            <div className="col-md-9">
              <div className="detail-block">
                <div className="row  wow fadeInUp">
                  <div className="col-xs-12 col-sm-6 col-md-5 gallery-holder">
                    <div className="product-item-holder size-big single-product-gallery small-gallery">
                      <div id="owl-single-product">
                        <div className="single-product-gallery-item" id="slide1">
                          <a
                            data-lightbox="image-1"
                            data-title="Gallery"
                            href={`http://localhost:5000/uploads/${product.file}`}
                          >
                            <img
                              className="img-responsive"
                              alt=""
                              src={`http://localhost:5000/uploads/${product.file}`}
                              data-echo={`http://localhost:5000/uploads/${product.file}`}
                            />
                          </a>
                        </div>
                        {/* /.single-product-gallery-item */}
                      </div>
                    
                      {/* /.gallery-thumbs */}
                    </div>
                    {/* /.single-product-gallery */}
                  </div>
                  {/* /.gallery-holder */}
                  <div className="col-sm-6 col-md-7 product-info-block">
                    <div className="product-info">
                      <h1 className="name">{product.name}</h1>
                      <div className="rating-reviews m-t-20">
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="rating rateit-small" />
                          </div>
                          <div className="col-sm-8">
                            <div className="reviews">
                              <a href="#" className="lnk">
                                (13 Reviews)
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.rating-reviews */}
                      <div className="stock-container info-container m-t-10">
                        <div className="row">
                          <div className="col-sm-2">
                            <div className="stock-box">
                              <span className="label">Availability :</span>
                            </div>
                          </div>
                          <div className="col-sm-9">
                            <div className="stock-box">
                              <span className="value">In Stock</span>
                            </div>
                          </div>
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.stock-container */}
                      <div className="description-container m-t-20">
                        {product.description}
                      </div>
                      {/* /.description-container */}
                      <div className="price-container info-container m-t-20">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="price-box">
                              <span className="price">{product.price}rs</span>
                              <span className="price-strike">{product.price+500}rs</span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="favorite-button m-t-10">
                              <a
                                className="btn btn-primary"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="Wishlist"
                                href="#"
                              >
                                <i className="fa fa-heart" />
                              </a>
                              <a
                                className="btn btn-primary"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="Add to Compare"
                                href="#"
                              >
                                <i className="fa fa-signal" />
                              </a>
                              <a
                                className="btn btn-primary"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="E-mail"
                                href="#"
                              >
                                <i className="fa fa-envelope" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.price-container */}
                      <div className="quantity-container info-container">
                        <div className="row">
                          {/* <div className="col-sm-2">
                            <span className="label">Qty :</span>
                          </div> */}
                          {/* <div className="col-sm-2">
                            <div className="cart-quantity">
                              <div className="quant-input">
                                <div className="arrows">
                                  <div className="arrow plus gradient">
                                    <span className="ir">
                                      <i className="icon fa fa-sort-asc" />
                                    </span>
                                  </div>
                                  <div className="arrow minus gradient">
                                    <span className="ir">
                                      <i className="icon fa fa-sort-desc" />
                                    </span>
                                  </div>
                                </div>
                                <input type="text" defaultValue={1} />
                              </div>
                            </div>
                          </div> */}
                          <div className="col-sm-7">
                            <a  className="btn btn-primary"  onClick={()=>{handleAdd(product)}}>
                              <i className="fa fa-shopping-cart inner-right-vs" />{" "}
                              ADD TO CART
                            </a>
                          </div>
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.quantity-container */}
                    </div>
                    {/* /.product-info */}
                  </div>
                  {/* /.col-sm-7 */}
                </div>
                {/* /.row */}
              </div>
              <div className="product-tabs inner-bottom-xs  wow fadeInUp">
                <div className="row">
                  <div className="col-sm-3">
                    <ul id="product-tabs" className="nav nav-tabs nav-tab-cell">
                      <li className="active">
                        <a data-toggle="tab" href="#description">
                          DESCRIPTION
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#review">
                          REVIEW
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tags">
                          TAGS
                        </a>
                      </li>
                    </ul>
                    {/* /.nav-tabs #product-tabs */}
                  </div>
                  <div className="col-sm-9">
                    <div className="tab-content">
                      <div id="description" className="tab-pane in active">
                        <div className="product-tab">
                          <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                            <br />
                            <br /> Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                          </p>
                        </div>
                      </div>
                      {/* /.tab-pane */}
                      <div id="review" className="tab-pane">
                        <div className="product-tab">
                          <div className="product-reviews">
                            <h4 className="title">Customer Reviews</h4>
                            <div className="reviews">
                              <div className="review">
                                <div className="review-title">
                                  <span className="summary">
                                    We love this product
                                  </span>
                                  <span className="date">
                                    <i className="fa fa-calendar" />
                                    <span>1 days ago</span>
                                  </span>
                                </div>
                                <div className="text">
                                  "Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.Aliquam suscipit."
                                </div>
                              </div>
                            </div>
                            {/* /.reviews */}
                          </div>
                          {/* /.product-reviews */}
                          <div className="product-add-review">
                            <h4 className="title">Write your own review</h4>
                            <div className="review-table">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th className="cell-label">&nbsp;</th>
                                      <th>1 star</th>
                                      <th>2 stars</th>
                                      <th>3 stars</th>
                                      <th>4 stars</th>
                                      <th>5 stars</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="cell-label">Quality</td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={1}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={2}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={3}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={4}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={5}
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cell-label">Price</td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={1}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={2}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={3}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={4}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={5}
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cell-label">Value</td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={1}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={2}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={3}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={4}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={5}
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                {/* /.table .table-bordered */}
                              </div>
                              {/* /.table-responsive */}
                            </div>
                            {/* /.review-table */}
                            <div className="review-form">
                              <div className="form-container">
                                <form role="form" className="cnt-form">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <div className="form-group">
                                        <label htmlFor="exampleInputName">
                                          Your Name{" "}
                                          <span className="astk">*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control txt"
                                          id="exampleInputName"
                                          placeholder=""
                                        />
                                      </div>
                                      {/* /.form-group */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputSummary">
                                          Summary <span className="astk">*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control txt"
                                          id="exampleInputSummary"
                                          placeholder=""
                                        />
                                      </div>
                                      {/* /.form-group */}
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label htmlFor="exampleInputReview">
                                          Review <span className="astk">*</span>
                                        </label>
                                        <textarea
                                          className="form-control txt txt-review"
                                          id="exampleInputReview"
                                          rows={4}
                                          placeholder=""
                                          defaultValue={""}
                                        />
                                      </div>
                                      {/* /.form-group */}
                                    </div>
                                  </div>
                                  {/* /.row */}
                                  <div className="action text-right">
                                    <button className="btn btn-primary btn-upper">
                                      SUBMIT REVIEW
                                    </button>
                                  </div>
                                  {/* /.action */}
                                </form>
                                {/* /.cnt-form */}
                              </div>
                              {/* /.form-container */}
                            </div>
                            {/* /.review-form */}
                          </div>
                          {/* /.product-add-review */}
                        </div>
                        {/* /.product-tab */}
                      </div>
                      {/* /.tab-pane */}
                      <div id="tags" className="tab-pane">
                        <div className="product-tag">
                          <h4 className="title">Product Tags</h4>
                          <form role="form" className="form-inline form-cnt">
                            <div className="form-container">
                              <div className="form-group">
                                <label htmlFor="exampleInputTag">
                                  Add Your Tags:{" "}
                                </label>
                                <input
                                  type="email"
                                  id="exampleInputTag"
                                  className="form-control txt"
                                />
                              </div>
                              <button
                                className="btn btn-upper btn-primary"
                                type="submit"
                              >
                                ADD TAGS
                              </button>
                            </div>
                            {/* /.form-container */}
                          </form>
                          {/* /.form-cnt */}
                          <form role="form" className="form-inline form-cnt">
                            <div className="form-group">
                              <label>&nbsp;</label>
                              <span className="text col-md-offset-3">
                                Use spaces to separate tags. Use single quotes (')
                                for phrases.
                              </span>
                            </div>
                          </form>
                          {/* /.form-cnt */}
                        </div>
                        {/* /.product-tab */}
                      </div>
                      {/* /.tab-pane */}
                    </div>
                    {/* /.tab-content */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.product-tabs */}
              {/* ============================================== UPSELL PRODUCTS ============================================== */}
             
            </div>
            {/* /.col */}
            <div className="clearfix" />
          </div>
          {/* /.row */}
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
                      data-echo="/assets/images/brands/brand1.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item m-t-10">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand2.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand3.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand4.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand5.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand6.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand2.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand4.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand1.png"
                      src="/assets/images/blank.gif"
                      alt=""
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/assets/images/brands/brand5.png"
                      src="/assets/images/blank.gif"
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
else{
  return(<Spinner/>)
}
}
return(
  <>
    {productData()}
  </>
)
}
