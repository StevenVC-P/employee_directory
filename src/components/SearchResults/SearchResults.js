import React from "react";
import moment from "moment";
import "./style.css";

function SearchResults(props) {
  return (
    <tbody>
      {props.results.filter(search => {
        let name = search.name.first.toLowerCase() + search.name.last.toLowerCase();
        let searchName = props.value.toLowerCase()
        let result = name.includes(searchName)
        return result
      }).map(result => (
        <tr key ={result.login.uuid}>
          <td className= "image">
          <img src={result.picture.medium} alt={ `headshot of: ${result.name.first} ${result.name.last}`} ></img>
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
          <td className="dob">
            {moment(result.dob.date).format("L")}{}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default SearchResults;
