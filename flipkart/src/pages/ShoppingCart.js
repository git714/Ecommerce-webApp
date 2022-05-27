import { useSelector,useDispatch } from "react-redux"
import { add,remove,decreaseCart } from "../redux/cartSlice";
import { Link } from 'react-router-dom';

export const ShoppingCart = (props) =>{
  const dispatch=useDispatch();
  // remove function
  const handleRemove=(product)=>{
    dispatch(remove(product))
   
 }
// handle decrease function
const handleDecrease=(product)=>{
  dispatch((decreaseCart(product)))
}
// handle increase function
const handleIncrease=(product)=>{
  dispatch((add(product)))
}
//  getting products from store
  const products=useSelector((state)=>
     state.cart.cartItems);
     
// total cart price
     const getTotal = () => {
      return products.reduce((accum,currentValue) => {
          return accum+currentValue.price*currentValue.cartQuantity;
      }, 0);
  };



  return (

    <>
    {props.header}
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Shopping Cart</li>
            </ul>
          </div>
          {/* /.breadcrumb-inner */}
        </div>
        {/* /.container */}
      </div>
      {/* /.breadcrumb */}
      <div className="body-content outer-top-xs" >
        <div className="container">
          <div className="row ">
            <div className="shopping-cart">
              <div className="shopping-cart-table ">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="cart-romove item">Remove</th>
                        <th className="cart-description item">Image</th>
                        <th className="cart-product-name item">Product Name</th>
                        {/* <th className="cart-edit item">Edit</th> */}
                        <th className="cart-qty item">Quantity</th>
                        <th className="cart-sub-total item">Price</th>
                        <th className="cart-total last-item">Total</th>
                      </tr>
                    </thead>
                    {/* /thead */}
                    <tfoot>
                      <tr>
                        <td colSpan={7}>
                          <div className="shopping-cart-btn">
                            <span className="">
                              <Link to="/"
                               
                                className="btn btn-upper btn-primary outer-left-xs"
                              >
                                Continue Shopping
                              </Link>
                              {/* <a
                                href="#"
                                className="btn btn-upper btn-primary pull-right outer-right-xs"
                              >
                                Update shopping cart
                              </a> */}
                            </span>
                          </div>
                          {/* /.shopping-cart-btn */}
                        </td>
                      </tr>
                    </tfoot>
                    <tbody>
                    {products.map((product)=>{
                      return(
                        

                   
                      <tr key={product._id}>
                      
                        <td className="romove-item">
                          <a onClick={()=>handleRemove(product)} title="cancel" className="icon">
                            <i className="fa fa-trash-o" />
                          </a>
                        </td>
                        <td className="cart-image">
                          <a className="entry-thumbnail" >
                            <img src={`http://localhost:5000/uploads/${product.file}`} alt="" />
                          </a>
                        </td>
                        <td className="cart-product-name-info">
                          <h4 className="cart-product-description">
                            <a href="detail.html">{product.name}</a>
                          </h4>
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="rating rateit-small" />
                            </div>
                            <div className="col-sm-8">
                              <div className="reviews">(06 Reviews)</div>
                            </div>
                          </div>
                          {/* /.row */}
                          <div className="cart-product-info">
                            {/* <span className="product-color">
                              COLOR:<span>Blue</span>
                            </span> */}
                          </div>
                        </td>
                        {/* <td className="cart-product-edit">
                          <a href="#" className="product-edit">
                            Edit
                          </a>
                        </td> */}
                        <td className="cart-product-quantity">
                          <div className="quant-input">
                            <div className="arrows">
                              <div className="arrow plus gradient">
                                <span className="ir">
                                  <i onClick={()=>handleIncrease(product)} className="icon fa fa-sort-asc" />
                                </span>
                              </div>
                              <div className="arrow minus gradient">
                                <span className="ir">
                                  <i onClick={()=>handleDecrease(product)} className="icon fa fa-sort-desc" />
                                </span>
                              </div>
                            </div>
                            <input type="text" value={product.cartQuantity} />
                          </div>
                        </td>
                        <td className="cart-product-sub-total">
                          <span className="cart-sub-total-price">{product.price}</span>
                        </td>
                        <td className="cart-product-grand-total">
                          <span className="cart-grand-total-price">{product.price*product.cartQuantity}</span>
                        </td>
                      </tr>)
                    })}
                    </tbody>
                    {/* /tbody */}
                  </table>
                  {/* /table */}
                </div>
              </div>
              {/* /.shopping-cart-table */}{" "}
              <div className="col-md-4 col-sm-12 estimate-ship-tax">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <span className="estimate-title">
                          Estimate shipping and tax
                        </span>
                        <p>Enter your destination to get shipping and tax.</p>
                      </th>
                    </tr>
                  </thead>
                  {/* /thead */}
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-group">
                          <label className="info-title control-label">
                            Country <span>*</span>
                          </label>
                          <select className="form-control unicase-form-control selectpicker">
                            <option>--Select options--</option>
                            <option>India</option>
                            <option>SriLanka</option>
                            <option>united kingdom</option>
                            <option>saudi arabia</option>
                            <option>united arab emirates</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="info-title control-label">
                            State/Province <span>*</span>
                          </label>
                          <select className="form-control unicase-form-control selectpicker">
                            <option>--Select options--</option>
                            <option>TamilNadu</option>
                            <option>Kerala</option>
                            <option>Andhra Pradesh</option>
                            <option>Karnataka</option>
                            <option>Madhya Pradesh</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="info-title control-label">
                            Zip/Postal Code
                          </label>
                          <input
                            type="text"
                            className="form-control unicase-form-control text-input"
                            placeholder=""
                          />
                        </div>
                        <div className="pull-right">
                          <button
                            type="submit"
                            className="btn-upper btn btn-primary"
                          >
                            GET A QOUTE
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.estimate-ship-tax */}
              <div className="col-md-4 col-sm-12 estimate-ship-tax">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <span className="estimate-title">Discount Code</span>
                        <p>Enter your coupon code if you have one..</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control unicase-form-control text-input"
                            placeholder="You Coupon.."
                          />
                        </div>
                        <div className="clearfix pull-right">
                          <button
                            type="submit"
                            className="btn-upper btn btn-primary"
                          >
                            APPLY COUPON
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  {/* /tbody */}
                </table>
                {/* /table */}
              </div>
              {/* /.estimate-ship-tax */}
              <div className="col-md-4 col-sm-12 cart-shopping-total">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        {/* <div className="cart-sub-total">
                          Subtotal<span className="inner-left-md">$600.00</span>
                        </div> */}
                        <div className="cart-grand-total">
                          Grand Total
                          <span className="inner-left-md">{getTotal()} R.s</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {/* /thead */}
                  <tbody>
                    <tr>
                      <td>
                        <div className="cart-checkout-btn pull-right">
                          <button
                            type="submit"
                            className="btn btn-primary checkout-btn"
                          >
                            PROCCED TO CHEKOUT
                          </button>
                          <span className="">
                            Checkout with multiples address!
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  {/* /tbody */}
                </table>
                {/* /table */}
              </div>
              {/* /.cart-shopping-total */}{" "}
            </div>
            {/* /.shopping-cart */}
          </div>{" "}
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
  )
}
  
