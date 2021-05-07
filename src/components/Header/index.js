import React from "react";
import "./styles.css";

function Header() {
    return(
        <header className="header-blue">
            <div className="white">
                <h1 className="mb-3">Employee Directory</h1>
                <h5 className="mb-3">Click on carrots to filter by heading or use the search bar to narrow your results</h5>
            </div>
        </header>
    );
}

export default Header