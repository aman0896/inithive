import React from "react";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import HeroArea from "../components/Home/HeroArea";
import Services from "../components/Home/Services";
import Screen from "../components/ViewScreen/Screen";

function Home() {
  return (
    <Screen>
      <HeroArea />
      <About />
      <Services />
      <Contact />
    </Screen>
  );
}

export default Home;
