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

class Login extends Component {
    constructor(props){
        super();
        this.state = {
            userInfo: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        const { userInfo } = this.state;
        this.setState({
            userInfo: {
                ...userInfo,
                [event.target.name]: event.target.value
            }
        })
    }
    handleSubmit = () => {
        const { userInfo } = this.state;
        if(userInfo.userName !== undefined && userInfo.password !== undefined){
            return this.props.history.push("/registerList");
        }
    }
    render() {
        return (
            <div className="login-container">
                <h3>LOGIN</h3>
                <div className="user-details flex flex-column">
                    <input type="text" name="userName" placeholder="Username" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button type="button" onClick={this.handleSubmit}>SIGN IN</button>
                </div>
            </div>
        );
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Login)
);