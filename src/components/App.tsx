// import { useState } from "react";

import NavBar from "./NavBar";
import Me from "./Me";
import Experiences from "./Experiences";

import AuroraHero from "./AuroraHero";
import MenuTabs from "./MenuTabs";
import MainContent from "./MainContent";
// import VelocityText from "./text/VelocityText";

function App() {
  return (
    <>
      <NavBar />
      {/* <AuroraHero /> */}
      <Me />
      <MenuTabs />
      <MainContent />
    </>
  );
}

export default App;
