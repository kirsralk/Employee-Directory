import React from "react";
 
 

function EmpTable(props) {
 
 
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" >Picture</th>
          <th scope="col" > Name </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>

        {props.filteredEmp.map(employee =>  
         
         <tr  key={employee.login.uuid}>
         <td>
           <img
             className="img-thumbnail"
             src={employee.picture.thumbnail}
             alt="person"
            
           ></img>
         </td>
         <td>{employee.name.first + " " + employee.name.last} </td>
         <td>{employee.phone}</td>
         <td>{employee.email}</td>
         <td>{employee.dob.date.substring(0,employee.dob.date.length - 14 )}</td>
       </tr>
        
      
      )} 

   
      </tbody>
    </table>
  );
}

export default EmpTable;