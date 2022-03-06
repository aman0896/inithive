import React, { useState, useEffect } from "react";
import "./App.css";
import "./css/Style.css";
import Routing from "./Routing/Routing";
import WOW from "wowjs";
import $ from "jquery";

// import "./css/animate.css";

function App() {
  useEffect(() => {
    var wow = new WOW.WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
      mobile: true, // default
      live: true, // default
    });

    let scrolled = false;
    $(window).on("scroll", function () {
      console.log(scrolled, "scroll");
      // jQuery to check for page scroll, you can replace this with an equivalent if you don't like using both jQuery and ReactJS at the same time
      if (!scrolled) {
        scrolled = true;
        wow.init(); // WOW.js initializes only once the page has scrolled
      }
    });
  }, []);

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
