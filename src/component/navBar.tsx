import {Component} from "react";

class NavBar extends Component<{ totalCounters: number }> {
    render() {
        const {totalCounters} = this.props;

        return (
            <nav className="navbar navbar-light bg-dark">
                <a className="navbar-brand" href="#">
                    NavBar
                    <span className="badge badge-pill badge-secondary m-2">
                        {totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}

export default NavBar;