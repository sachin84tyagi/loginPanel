import React, { Component } from 'react';

class DisplayCount extends Component {
    state = {
        anyValue: "Some Values"
    }
    // componentWillReceiveProps(nextprops) {
    //     console.log("Component Will state values........", this.state.anyValue)
    //     console.log("Component Will Recieve Props........", this.props.counter)
    //     console.log("Component Will Recieve Props........", nextprops.counter)
    // }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps state values........", state.anyValue);
        console.log("getDerivedStateFromProps........", props.counter);
        return {
            anyValue: "another Values"
        }
        return null;

    }

    render() {
        return (
            <React.Fragment>
                {this.state.anyValue}
                <br></br>
                <button>{this.props.counter}</button>
                <button onClick={this.props.countIncrment}>Increment</button>
            </React.Fragment>
        );
    }
}

export default DisplayCount;