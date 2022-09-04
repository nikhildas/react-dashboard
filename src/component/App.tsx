import React, {Component} from "react";
import NavBar from "./navBar";
import Counters from "./counters";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

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

        this.setState({counters});
    }

    handeDecrement = (counter: any) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = {...counter};
        if (counters[index].value > 0)
            counters[index].value--;

        this.setState({counters});
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
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;