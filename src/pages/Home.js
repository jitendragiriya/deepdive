import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import { ROUTES } from "../constants";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <> 
      <HomeHeader/>
      <Banner/> 
    </>
  );
};

export default Home;
