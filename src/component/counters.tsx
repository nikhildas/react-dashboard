import {Component, Key, MouseEventHandler} from "react";
import Counter from "./counter";
import Button from "@mui/material/Button";

class Counters extends Component<{
    counters: any,
    onDelete: Function,
    onIncrement: Function,
    onReset: MouseEventHandler,
    onDeleteAll: MouseEventHandler,
    onDecrement: Function,
    onCreate: MouseEventHandler
}> {
    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement, onCreate, onDeleteAll} = this.props

        return (
            <div>
                <Button onClick={onReset} variant="contained" color="error" className="m-2">Reset</Button>
                <Button onClick={onDeleteAll} variant="outlined" color="error" className="m-2">Delete All</Button>
                <Button onClick={onCreate} variant="contained" color="success" className="m-2">Add</Button>
                <table>
                    <tbody>
                    {counters.map((counter: { id: Key; }) => (
                        <Counter
                            key={counter.id}
                            onDelete={(counterID: number) => onDelete(counterID)}
                            onIncrement={(counter: any) => onIncrement(counter)}
                            onDecrement={(counter: any) => onDecrement(counter)}
                            onCreate={onCreate}
                            counter={counter}/>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Counters;