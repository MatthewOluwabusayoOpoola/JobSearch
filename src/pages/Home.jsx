import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import SearchDiv from "../Components/SearchDiv/SearchDiv";
import JobDiv from "../Components/JobDiv/JobDiv";
import ValueDiv from "../Components/ValueDiv/ValueDiv";
import FooterDiv from "../Components/FooterDiv/FooterDiv";

function Home() {
  return (
    <div className="Home">
      <SearchDiv />
      <JobDiv />
      <ValueDiv />
    </div>
  );
}

export default Home;
