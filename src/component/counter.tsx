import {Component} from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

class Counter extends Component<{ counter: any, onDelete: Function, onIncrement: Function, onDecrement: Function, onCreate: Function }> {
    render() {
        const {onIncrement, onDelete, counter, onDecrement} = this.props
        return (
            <tr>
                <td width="80px"><span className={this.getBadgeClasses()}>{this.formatCount()}</span></td>
                <td><Button variant="contained"
                            color="error"
                            startIcon={<RemoveIcon/>}
                            onClick={() => onDecrement(counter)}
                            className="btn btn-secondary btn-sm"/></td>
                <td><Button variant="contained"
                            color="success"
                            startIcon={<AddIcon/>}
                            onClick={() => onIncrement(counter)}
                            className="btn btn-secondary btn-sm"/></td>
                <td><Button variant="outlined"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => onDelete(counter.id)}
                            className={"m-2"}>Delete</Button></td>
            </tr>);
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    private getBadgeClasses() {
        let classes = "badge m-2 badge-";
        const {value} = this.props.counter;

        classes += (value === 0) ? "warning" : "primary"
        return classes;
    }
}

export default Counter