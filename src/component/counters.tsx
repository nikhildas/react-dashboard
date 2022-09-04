import {Component, Key, MouseEventHandler} from "react";
import Counter from "./counter";

class Counters extends Component<{ counters: any, onDelete: Function, onIncrement: Function, onReset: MouseEventHandler, onDecrement: Function }> {
    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props

        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset
                </button>
                {counters.map((counter: { id: Key; }) => (
                    <Counter
                        key={counter.id}
                        onDelete={(counterID: number) => onDelete(counterID)}
                        onIncrement={(counter: any) => onIncrement(counter)}
                        onDecrement={(counter: any) => onDecrement(counter)}
                        counter={counter}/>
                ))}
            </div>
        );
    }
}


export default Counters;