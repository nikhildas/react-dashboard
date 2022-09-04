import {Component} from "react";
import Button from '@mui/material/Button';

class Counter extends Component<{ counter: any, onDelete: Function, onIncrement: Function, onDecrement: Function }> {
    render() {
        const {onIncrement, onDelete, counter, onDecrement} = this.props
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <Button variant="contained"
                        color="success"
                    onClick={() => onIncrement(counter)}
                    className="btn btn-secondary btn-sm">+
                </Button >
                <Button variant="contained"
                        color="error"
                        onClick={() => onDecrement(counter)}
                        className="btn btn-secondary btn-sm">-
                </Button >
                <Button variant="contained"
                        color="error"
                    onClick={() => onDelete(counter.id)}
                    className={"m-2"}>Delete
                </Button >
            </div>);
    }

    private getBadgeClasses() {
        let classes = "badge m-2 badge-";
        const {value} = this.props.counter;

        classes += (value === 0) ? "warning" : "primary"
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter