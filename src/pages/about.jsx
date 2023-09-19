/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import a6 from "../assets/images/back.png";
import Marquee from "react-fast-marquee";
import orders from "../assets/images/icons/icon1.png";
import orders1 from "../assets/images/icons/icon2.png";
import orders2 from "../assets/images/icons/icon3.png";
import orders3 from "../assets/images/icons/icon4.png";
import orders4 from "../assets/images/icons/icon5.png";

const about = () => {
  return (
    <>
      <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="text-white">#Know Us</h1>
                <p className="text-white fs-3">Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us p-5">
        <div className="row">
          <div className="col-md-6">
            <img src={a6} alt="" className="img-fluid p-5" />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1>
              <b>Who are we?</b>
            </h1>
            <p className="card-text mb-3">
              M.S. GOLA ENTERPRISES is manufacturing & working in the field of
              design and developement of Critical Care Areas of Healthcare
              Premises including: Medical Gas management system, Pre-fabricated
              Operated Rooms. Specialized Hospital Furniture and related
              equipments Our product range includes medical gas management
              system Plant, Piping layout a ric: bedisde accessories along with
              ceiling pendants and bed head units, Modular Operation Theaters
              surgeon control panels, laminar air low system, Wall and ceiling
              constructions, flooring etc., Specialized Hospital Furniture i.e.
              Nursing Station, Specialized Carts and Storage Solutions,
              Designing, supply with all accessories etc.
            </p>
            <p className="card-text">
              We are one of the good manufacturers of Hospital Furniture & O.T.
              Equipments and associated with leading manufacturers of Medical
              Gas pipeline components and Modular Operation Theaters, All our
              and associated factories, G.E. products are as per international
              standard CE marked and manufactured in ISO certified market. 
            </p>
          </div>
        </div>
      </section>

      <section className="abouts p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-3">
              <Marquee className="p-2 slide">
                <div>
                  <img src={orders} alt="" className="img-fluid" />
                  <p className="card-text mb-2">Fast Orders</p>
                </div>
                <div>
                  <img src={orders1} alt="" className="img-fluid" />
                  <p className="card-text mb-2">Quick Shipping</p>
                </div>
                <div>
                  <img src={orders2} alt="" className="img-fluid" />
                  <p className="card-text mb-2">High Saves</p>
                </div>
                <div>
                  <img src={orders3} alt="" className="img-fluid" />
                  <p className="card-text">24/7 Support</p>
                </div>
                <div>
                  <img src={orders4} alt="" className="img-fluid" />
                  <p className="card-text">Online Orders</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
