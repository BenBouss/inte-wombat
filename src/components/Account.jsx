import React, { Component } from 'react'
import AccountInfo from './AccountInfo'

class Account extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        show: false
    }
    toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    render() {
        return (
            <div className={`account ${this.state.show ? "Open" : "Close"}`} onClick={this.toggle}>
                <span className="accountIcon flex-items-center">BB</span>
                {this.state.show &&
                    <AccountInfo />
                }
            </div>
        );
    }
}

export default Account;