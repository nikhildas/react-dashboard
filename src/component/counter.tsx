import {Component} from "react";

class Counter extends Component<{ counter: any, onDelete: Function, onIncrement: Function }> {
    render() {
        const {onIncrement, onDelete, counter} = this.props
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => onIncrement(counter)}
                    className="btn btn-secondary btn-sm">Increment
                </button>
                <button
                    onClick={() => onDelete(counter.id)}
                    className={"btn btn-danger btn-sm m-2"}>Delete
                </button>
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