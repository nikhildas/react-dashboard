import React, {Component} from "react";
import NavBar from "./navBar";
import Counters from "./counters";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import {default as axios} from "axios";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ],
        country_name: "",
        country_capital: "",
    };

    handleCreate = () => {
        const counters = this.state.counters
        counters.push({id: counters.length, value: 0})

        console.log("Created event handler called with counter ID: ", counters.length - 1)
        this.setState({counters})
    }

    handleDeleteAll = () => {
        this.setState({counters: []})
    }

    handleDelete = (counterID: number) => {
        const counters = this.state.counters.filter(c => c.id !== counterID)
        this.setState({counters})
        console.log("Delete event handler called ", counterID)
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({counters});
    }

    handleIncrement = (counter: any) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = {...counter};
        counters[index].value++;

        console.log("Incrementing")
        this.setState({counters});
    }

    handeDecrement = (counter: any) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = {...counter};
        if (counters[index].value > 0)
            counters[index].value--;

        console.log("Decrementing")
        this.setState({counters});
    }

    handleGetCountryDetails = () => {
        const country_name_uri = "https://restcountries.com/v3.1/name/"
        axios.get(country_name_uri + this.state.country_name)
            .then((response => {
                    this.setState({country_name: response.data[0].name.common})
                    this.setState({country_capital: response.data[0].capital[0]})
                    console.log("Getting capital")
                })
            );
    }

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={
                    this.state.counters.filter(c => c.value > 0).length
                }/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handeDecrement}
                        onDelete={this.handleDelete}
                        onCreate={this.handleCreate}
                        onDeleteAll={this.handleDeleteAll}
                    />
                </main>
                <table>
                    <tbody>
                    <tr>
                        <td><TextField
                            id="country-name"
                            label="Country"
                            variant="outlined"
                            size="small"
                            className="m-2 align-self-center"
                            value={this.state.country_name}
                            onChange={e => this.getCountryField(e)}/></td>
                        <td><Button
                            variant="contained"
                            className="m-2 align-self-center"
                            onClick={() => this.handleGetCountryDetails()}>Get Capital</Button></td>
                        <td><TextField
                            disabled
                            id="country-capital"
                            label="Country Capital"
                            size="small"
                            className="m-2 align-self-center"
                            value={this.state.country_capital}
                            variant="outlined"/></td>
                    </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }

    private getCountryField(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        this.setState({country_name: e.target.value});
    }
}

export default App;

//https://restcountries.com/