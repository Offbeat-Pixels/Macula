import { BrowserRouter ,Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Services,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Why,
  StarsCanvas,
} from "./components";
import Consulting from "./innerPages/Consulting";
import Sales from "./innerPages/Liaison";
import Management from "./innerPages/Management";

const App = () => {
  return (
    // <BrowserRouter>
    <div className="relative z-0 bg-primary">
      {/* <div className='relative z-0 bg-slate-200'> */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
       
        <Hero />
      </div>
      <About />
      <Services />
      {/* <Tech /> */}
      <Why />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>

    // </BrowserRouter>
  );
}

export default App;
