export const ProductComparison = (props) => (
  <>
  {props.header}
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb-inner">
          <ul className="list-inline list-unstyled">
            <li>
              <a href="home.html">Home</a>
            </li>
            <li className="active">Compare</li>
          </ul>
        </div>
        {/* /.breadcrumb-inner */}
      </div>
      {/* /.container */}
    </div>
    {/* /.breadcrumb */}
    <div className="body-content outer-top-xs">
      <div className="container">
        <div className="product-comparison">
          <div>
            <h1 className="page-title text-center heading-title">
              Product Comparison
            </h1>
            <div className="table-responsive">
              <table className="table compare-table inner-top-vs">
                <tbody>
                  <tr>
                    <th>Products</th>
                    <td>
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img alt="" src="assets/images/products/p1.jpg" />
                            </a>
                          </div>
                          <div className="product-info text-left">
                            <h3 className="name">
                              <a href="detail.html">Floral Print Buttoned</a>
                            </h3>
                            <div className="action">
                              <a className="lnk btn btn-primary" href="#">
                                Add To Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img alt="" src="assets/images/products/p2.jpg" />
                            </a>
                          </div>
                          <div className="product-info text-left">
                            <h3 className="name">
                              <a href="detail.html">Floral Print Buttoned</a>
                            </h3>
                            <div className="action">
                              <a className="lnk btn btn-primary" href="#">
                                Add To Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img alt="" src="assets/images/products/p4.jpg" />
                            </a>
                          </div>
                          <div className="product-info text-left">
                            <h3 className="name">
                              <a href="detail.html">Floral Print Buttoned</a>
                            </h3>
                            <div className="action">
                              <a className="lnk btn btn-primary" href="#">
                                Add To Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product">
                        <div className="product-image">
                          <div className="image">
                            <a href="detail.html">
                              <img alt="" src="assets/images/products/p5.jpg" />
                            </a>
                          </div>
                          <div className="product-info text-left">
                            <h3 className="name">
                              <a href="detail.html">Floral Print Buttoned</a>
                            </h3>
                            <div className="action">
                              <a className="lnk btn btn-primary" href="#">
                                Add To Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>
                      <div className="product-price">
                        <span className="price"> $300.00 </span>
                        <span className="price-before-discount">$500.00</span>
                      </div>
                    </td>
                    <td>
                      <div className="product-price">
                        <span className="price"> $350.00 </span>
                        <span className="price-before-discount">$500.00</span>
                      </div>
                    </td>
                    <td>
                      <div className="product-price">
                        <span className="price"> $400.00 </span>
                        <span className="price-before-discount">$500.00</span>
                      </div>
                    </td>
                    <td>
                      <div className="product-price">
                        <span className="price"> $3600.00 </span>
                        <span className="price-before-discount">$500.00</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>
                      <p className="text">
                        Proin semper eros ac posuere ultrices. Nulla quis mi in
                        risus volutpat blandit vestibulum in lorem. In euismod
                        laoreet sapien vel gravida. Proin sem per eros ac
                        posuere ultrices. Nulla quis mi in risus.
                      </p>
                      <p />
                    </td>
                    <td>
                      <p className="text">
                        Proin semper eros ac posuere ultrices. Nulla quis mi in
                        risus volutpat blandit vestibulum in lorem. In euismod
                        laoreet sapien vel gravida. Proin sem per eros ac
                        posuere ultrices.
                      </p>
                      <p> </p>
                    </td>
                    <td>
                      <p className="text">
                        Proin semper eros ac posuere ultrices. Nulla quis mi in
                        risus volutpat blandit vestibulum in lorem. In euismod
                        laoreet sapien vel gravida.
                      </p>
                      <p />
                    </td>
                    <td>
                      <p className="text">
                        Proin semper eros ac posuere ultrices. Nulla quis mi in
                        risus volutpat blandit vestibulum in lorem. In euismod
                        laoreet sapien vel gravida. Proin sem per eros ac
                        posuere ultrices. Nulla quis mi in risus.
                      </p>
                      <p />
                    </td>
                  </tr>
                  <tr>
                    <th>Availability</th>
                    <td>
                      <p className="in-stock">In Stock</p>
                    </td>
                    <td>
                      <p className="in-stock">In Stock</p>
                    </td>
                    <td>
                      <p className="in-stock">In Stock</p>
                    </td>
                    <td>
                      <p className="in-stock">In Stock</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Remove</th>
                    <td className="text-center">
                      <a href="#" className="remove-icon">
                        <i className="fa fa-times" />
                      </a>
                    </td>
                    <td className="text-center">
                      <a href="#" className="remove-icon">
                        <i className="fa fa-times" />
                      </a>
                    </td>
                    <td className="text-center">
                      <a href="#" className="remove-icon">
                        <i className="fa fa-times" />
                      </a>
                    </td>
                    <td className="text-center">
                      <a href="#" className="remove-icon">
                        <i className="fa fa-times" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    {props.footer}
  </>
)
