import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
// import { link45, file, check2all } from "../npm/icon";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {
    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <h2 className="mx-4 mt-4">Most</h2>
        <div className="row g-3 m-3">
          {row.map((product, idx) => {
            const ProductImage = this.components[product.img];
            return (
              <div key={idx} className="col-md-3 mb-4" >
                <CardIcon
                  title={product.title}
                  text={product.text}
                  tips={product.tips}
                  to={product.to}
                  style={{ height: "200px" }}
                >
                  {/* <ProductImage
                    className={product.cssClass}
                    width="80"
                    height="80"
                  /> */}
                  <img src="../../images/banner/lap.png" alt="" style={{height:"150px"}} className="img-fluid w-100"  />
                </CardIcon>
              </div>
            );
          })}
        </div>
      </div>
    ));

    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        <div className="container-fluid  ">
          <div className="row g-3">
            <div className="">
              <Carousel id="elect-product-category" className="mb-3 px-5">
                {carouselContent}
              </Carousel>
              {/* <Support /> */}
            </div>
          </div>
        </div>
        
        <div className="container-fluid  mb-3 px-5 pb-5">
          <div className="row ">
            <div className="col-md-12">
              <CardDealsOfTheDay
                endDate={Date.now() + 1000 * 60 * 60 * 14}
                title="Deals of the Day"
                to="/"
              >
                <Carousel id="elect-product-category1">
                  {carouselContent}
                </Carousel>
              </CardDealsOfTheDay>
            </div>
          </div>
        </div>

        <div className=" bg-gradient p-3 text-center mb-3">
          <h4 className="m-0">Explore Fashion Collection</h4>
        </div>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/man.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                {/* <div className="text-center h6">Men's Clothing</div> */}
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/female.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                {/* <div className="text-center h6">Women's Clothing</div> */}
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/clock.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                {/* <div className="text-center h6">Smartwatch</div> */}
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/shoes.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                {/* <div className="text-center h6">Footwear</div> */}
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeView;
