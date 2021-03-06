import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import Employee from "../Employee/Employee";
import "./styles.css";

class Table extends Component {
    state = {
        search: "",
        result: [],
        order: []
    };
    // When this component mounts
    componentDidMount = () => {
        API.getEmployees()
            .then(res => this.setState({ result: res.data.results}))
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };
    handleSubmit = event => {
        event.preventDefault()
        if (`${this.state.order}`=== ""|| `${this.state.order}` === "descending") {
            this.setState({
                order:"ascending"
            })
            const ascEmployees = this.state.result.sort((x,y) => {
                let nameX = x.name.last;
                let nameY = y.name.last;
                if (nameX < nameY) {
                    return -1
                }
                return 0;
            });
            this.setState({
                result: ascEmployees
            })
        } 
        else if (`${this.state.order}` === "ascending"){
            this.setState({
                order: "descending"
            })
            const ascEmployees = this.state.result.sort((x,y) => {
                let nameX = x.name.last;
                let nameY = y.name.last;
                if (nameX > nameY) {
                    return -1
                }
                return 0;
            });
            this.setState({
                result: ascEmployees
            })
        }
    }
    render() {
        return (
            <div class="tablewrap">
                <SearchForm 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <table id="table" className="table table-striped table-hover table-condensed">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th className="pointerName" onClick={this.handleSubmit}>
                                Name ???
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                DOB 
                            </th>
                        </tr>
                    </thead>
                    {!this.state.search ? (
                  <Employee results={this.state.result} />
              ) : (
                  <SearchResults results={this.state.result} value={this.state.search} />
              )}
                </table>
            </div>
        )
    }
}


export default Table;
