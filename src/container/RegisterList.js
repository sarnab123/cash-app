import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

const lists = {
    "register1": {
        "list1":{
            "regiterNumber": "0256"
        },
        "list2":{
            "regiterNumber": "0256"
        }
    },
    "register2": {
        "list1":{
            "regiterNumber": "0256"
        },
        "list2":{
            "regiterNumber": "0256"
        }
    },
    "register3": {
        "list1":{
            "regiterNumber": "0256"
        },
        "list2":{
            "regiterNumber": "0256"
        }
    },
    "register4": {
        "list1":{
            "regiterNumber": "0256"
        },
        "list2":{
            "regiterNumber": "0256"
        }
    }

}

const registers = Object.keys(lists);

class RegisterList extends Component {
    constructor(props){
        super();
        this.state = {
            lists,
            registers,
            selectedRegister: [],
            enteredAmount: 0,
            itemsAomount:[]
        }
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleAmountEntered = this.handleAmountEntered.bind(this);
        this.handleAcceptEntry = this.handleAcceptEntry.bind(this);
    }
    handleAmountEntered = (event) => {
        this.setState({
            enteredAmount: parseFloat(event.target.valueAsNumber).toFixed(2)
        });
    }
    handleAcceptEntry = () => {
        event.preventDefault();
        let { itemsAomount, enteredAmount } = this.state;
        const inputValue = document.getElementsByTagName("input")[0].value;
        this.setState({
            itemsAomount: [...itemsAomount, inputValue]
        });
    }
    handleRegisterClick = (event) => {
        const currentRegister = event.target.attributes.register;
        const children = event.target.children;
        this.setState({
            selectedRegister: [currentRegister]
        });
        if(currentRegister){
            children[0].classList.remove('hide');
        }
    }
    amountSum = (a, b) => {
        return parseFloat(a) + parseFloat(b);
    }
    render() {
        const { lists, itemsAomount } = this.state;

        return (
            <div className="registerlist-container">
                <div className="register-lists">
                    <h3>Register List</h3>
                    <ul className="lists">
                        {
                            Object.keys(lists).map((registry, i) => {
                                return (<li key={i} register={registry} onClick={this.handleRegisterClick}>
                                            {registry}
                                            <ul className="hide">
                                                {Object.keys(lists[registry]).map((lists,i) => <li key={i}>{lists}</li>)}
                                            </ul>
                                        </li>)
                            })
                        }
                    </ul>
                </div>
                <div className="checks-container">
                    <h3>Checks</h3>
                    <div className="flex flex-row">
                        <div className="amount-section">
                            <div className="enter-amount flex flex-column">
                                <label>
                                    Enter Amount&nbsp;
                                    <input type="number" onChange={this.handleAmountEntered}/>
                                </label>
                                <input type="button" value="Accept Entry" onClick={this.handleAcceptEntry}/>
                            </div>
                            <div className="entered-amounts">
                                <h5>Entered Items</h5>
                                <ul>
                                    { itemsAomount.map((amount,i) => <li key={i}><span>${amount}</span> <span>PK</span></li>) }
                                </ul>
                            </div>
                            <div className="amount-summary">
                                Entered Total&nbsp; ${ itemsAomount.length > 0 && itemsAomount.reduce(this.amountSum)}
                            </div>
                        </div>
                        <div className="system-items-section">
                            <label>System Items</label>
                            <div className="system-table">
                                <div className="sys-thead">
                                    <div className="sys-row">
                                        <div className="sys-col">Items</div>
                                        <div className="sys-col">Amount</div>
                                    </div>
                                </div>
                                <div className="sys-tbody">
                                    <div className="sys-row">
                                        <div className="sys-col">234</div>
                                        <div className="sys-col">$56</div>
                                    </div>
                                    <div className="sys-row">
                                        <div className="sys-col">256</div>
                                        <div className="sys-col">$100</div>
                                    </div>
                                    <div className="sys-row">
                                        <div className="sys-col">259</div>
                                        <div className="sys-col">$220</div>
                                    </div>
                                    <div className="sys-row">
                                        <div className="sys-col">258</div>
                                        <div className="sys-col">$330</div>
                                    </div>
                                    <div className="sys-row">
                                        <div className="sys-col">259</div>
                                        <div className="sys-col">$440</div>
                                    </div>
                                </div>
                            </div>
                            <div className="system-total-section">
                                <label>System Total</label>
                                <div>$11123</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(RegisterList)
);
