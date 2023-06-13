import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchDiv from "./Components/SearchDiv/SearchDiv";
import JobDiv from "./Components/JobDiv/JobDiv";
import ValueDiv from "./Components/ValueDiv/ValueDiv";
import FooterDiv from "./Components/FooterDiv/FooterDiv";

function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <SearchDiv />
      <JobDiv />
      <ValueDiv />
      <FooterDiv />
    </div>
  );
}

export default App;
