import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";

import Category from "./Components/Category/Category";
import CarouselEffect from "./Components/Carousel/Carousel";
// import ErrorBoundary from "./Components/ErrorBoundary";

const App = () => {
  return (
    <>
      <Header />
      <CarouselEffect/>
      <Category/>
      {/* <ErrorBoundary/> */}
    </>
  );
};

export default App;
