import React from "react";
import "./styles.css";

function SearchForm(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">

            <div className="navbar-collapse row" id="navbarNav">

                <div className="searchBox"><form className="form-inline">
                        <input
                            value= {props.search}
                            onChange= {props.handleInputChange}
                            name="term"
                            list="term"
                            type="text"
                            className="form-control"
                            id="term"
                            placeholder="Search" 
                            aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default SearchForm