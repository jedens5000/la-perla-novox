import React from "react";
import HomePage from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import WineList from "./components/WineList";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import ContactPage from "./components/Contact";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarComponent from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/winelist" component={WineList} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={ContactPage} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
