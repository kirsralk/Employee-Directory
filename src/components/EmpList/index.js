
import React from "react";

function EmpList({ picture, login, name, email, dob, phone }) {
  console.log("employees");
 

  return (
    <>
      <tr>
        <td>
          <img
            className="img-thumbnail"
            src={picture.thumbnail}
            alt="person"
            key={login.uuid}
          ></img>
        </td>
        <td>{name.first + " " + name.last} </td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{dob.date}</td>
      </tr>
    </>
  );
}

export default EmpList;