import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import EmpContainer from "./components/EmpContainer";
import Search from "./components/Search";
import API from "./utils/API";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filteredEmp, setFilterEmp] = useState([]);

  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        // console.log(res.data.results)
        setEmployees(res.data.results);
        setFilterEmp(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.search.value);
    const filteredEmp = employees.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.includes(search);
    });
    console.log(filteredEmp);
    setFilterEmp(filteredEmp);
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(search);
    const filteredEmp = employees.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.includes(search);
    });
    console.log(filteredEmp);
    setFilterEmp(filteredEmp);
  };

  const sortName = (e) => {
    e.preventDefault();
    if (filteredEmp.length > 0) {
      console.log("gotCalled");
      if (sort === "ascend") {
        setFilterEmp(filteredEmp.sort(function(a, b) {
          var textA = a.name.first.toUpperCase();
          var textB = b.name.first.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }))
        setSort("descend");
      } else {
        setFilterEmp(filteredEmp.reverse());
        setSort("ascend");
      }
    }
  };

  return (
    <div>
      <Header />
      <Search
        handleSearchChange={handleSearchChange}
        handleInputChange={handleInputChange}
        results={search}
        sortName={sortName}
      />

      <EmpContainer filteredEmp={filteredEmp}></EmpContainer>
    </div>
  );
}

export default App;