import React  from "react";
import EmpTable from "../EmpTable";

 

function EmpContainer({filteredEmp, sortName}) {



  return (

    <div className="container main">
        <EmpTable 
        filteredEmp={filteredEmp}
        sortName={sortName}
        />

    </div>
  );
}
export default EmpContainer;