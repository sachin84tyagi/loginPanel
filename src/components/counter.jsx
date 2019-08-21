import React, { Component } from 'react';
import DisplayCount from "./displayCount";

class Counter extends Component {
    state = {
        counter: 0
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
    }
    handleIncrement = () => {
        let { counter } = { ...this.state };
        counter = counter + 1;
        this.setState({ counter })

    }
    render() {
        return (
            <React.Fragment>
                <DisplayCount counter={this.state.counter} countIncrment={this.handleIncrement}></DisplayCount>

            </React.Fragment>
        );
    }
}

export default Counter;