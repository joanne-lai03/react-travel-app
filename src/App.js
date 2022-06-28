import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import Views from "./components/views/Views"
import ImgCarousel from "./components/carousel/ImgCarousel";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Views />
      <ImgCarousel />
    </div>
  );
}

export default App;
