import React from "react";
import SearchDiv from "../Components/SearchDiv/SearchDiv";
import ValueDiv from "../Components/ValueDiv/ValueDiv";
import CompaniesDiv from "../Components/CompaniesDiv/CompaniesDiv";

function Companies() {
  return (
    <div>
      <SearchDiv style={"hidden"} />
      <CompaniesDiv />
      <ValueDiv />
    </div>
  );
}

export default Companies;
