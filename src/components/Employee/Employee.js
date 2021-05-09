import React from "react";
import moment from "moment";

function Employee(props) {
  return (
    <tbody>
    {props.results.map(result =>(
      <tr key={result.login.uuid}>
        <td className="image">
          <img src={result.picture.medium} alt={`headshot of: ${result.name.first} ${result.name.last}`} ></img>
        </td>
        <td className="name">
            {result.name.first} {result.name.last}
          </td>
          <td className="phone">
            {result.cell}
          </td>
          <td className="email">
            <a href={ `mailto:${result.email}` } target="_blank" rel="noreferrer">
              {result.email}
            </a>
          </td>
          <td className-th="dob">
            {moment(result.dob.date).format("L")}{}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Employee;