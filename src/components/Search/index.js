import React from "react";
 
function Search(props) {
  return (
    <div className="container main text-center bg-light py-3">
      <form onSubmit={props.handleSearchChange}>
        <input
          onChange={props.handleInputChange}
          value={props.Search}
          name="search"
          type="text"
          className="form-control col-md-3 mx-auto text-center"
          placeholder="Search for an Employee"
          id="search"
        />
        <button type="submit" className="btn btn-primary mt-3"> Search </button>
        <button type="sort" onClick={props.sortName} className="btn btn-success mt-3 mx-3"> Sort by First Name</button>
      </form>
    </div>
  );
}

export default Search;
