/* eslint-disable no-unused-vars */
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import Featuredproducts from "../components/featuredproducts";
import Newarrivals from "../components/newarrivals";
import Newsletter from "../components/newsletter";
import Hero from "../components/hero";

const home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="back-details">
                      <p className="mb-3">Trade in offer</p>
                      <h1>Super Value Deals</h1>
                      <h2>On all products</h2>

                      <p className="mb-3">Save more today with Gola Enterprises</p>

                      <Link
                        to="/shop"
                        className="btn btn-primary"
                        id="button-link"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />

      <section className="featured-products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
            <Featuredproducts />
          </div>
        </div>
      </section>
      <section className="new-arrivals p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1>New Arrivals</h1>
              <p>Your Best Designer Outfits</p>
            </div>
            <Newarrivals />
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default home;
