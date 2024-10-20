import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./NavBar";
import Me from "./Me";

import AuroraHero from "./AuroraHero";
import VelocityText from "./text/VelocityText";

function App() {
  return (
    <>
      <NavBar />
      {/* <AuroraHero /> */}
      <Me />
      <AuroraHero />
    </>
  );
}

export default App;
