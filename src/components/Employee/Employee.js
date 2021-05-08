import React from "react";
import moment from "moment";

function Employee(props) {
  return (
    <tbody>
    {props.results.map(result =>(
      <tr key={result.login.uuid}>
        <td data-th="image">
          <img src={result.picture.medium} alt={`headshot of: ${result.name.first} ${result.name.last}`} ></img>
        </td>
        <td data-th="name">
            {result.name.first}{result.name.last}
          </td>
          <td data-th="phone">
            {result.cell}
          </td>
          <td data-th="email">
            <a href={ `mailto:${result.email}` } target="_blank" rel="noreferrer">
              {result.email}
            </a>
          </td>
          <td data-th="dob">
            {moment("{result.dob.date}").format("L")}{}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Employee;