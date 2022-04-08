export const TrackOrders= (props) => (
    <>
    {props.header}
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="home.html">Home</a>
              </li>
              <li className="active">Track your orders</li>
            </ul>
          </div>
          {/* /.breadcrumb-inner */}
        </div>
        {/* /.container */}
      </div>
      {/* /.breadcrumb */}
      <div className="body-content">
        <div className="container">
          <div className="track-order-page">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading-title">Track your Order</h2>
                <span className="title-tag inner-top-ss">
                  Please enter your Order ID in the box below and press Enter.
                  This was given to you on your receipt and in the confirmation
                  email you should have received.{" "}
                </span>
                <form className="register-form outer-top-xs" role="form">
                  <div className="form-group">
                    <label className="info-title" htmlFor="exampleOrderId1">
                      Order ID
                    </label>
                    <input
                      type="text"
                      className="form-control unicase-form-control text-input"
                      id="exampleOrderId1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="info-title" htmlFor="exampleBillingEmail1">
                      Billing Email
                    </label>
                    <input
                      type="email"
                      className="form-control unicase-form-control text-input"
                      id="exampleBillingEmail1"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-upper btn btn-primary checkout-page-button"
                  >
                    Track
                  </button>
                </form>
              </div>{" "}
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
  )
  