import React, { Component } from 'react';
import UserManager from "../../modules/UserManager";

class Login extends Component {
    state = {
        name: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = evt => {
        evt.preventDefault();
        const userName = this.state.name
        const password = this.state.password
        UserManager.getUser(userName).then(user => {
            {
                if (password === "" || userName === "") { alert("Please enter username and password") }
                else if (user[0].password === this.state.password) {
                    localStorage.setItem("userId", user[0].id)
                    this.props.history.push("/")
                }
                else {
                    (alert("Incorrect Password"))
                }
            }
        })
    }
    render() {
        return (
            <div className="login-field">
                <h2>Login</h2>
                <form>
                    <input
                        onChange={this.handleFieldChange}
                        type="text"
                        id="name"
                        placeholder="Username"
                    />

                    <input
                        onChange={this.handleFieldChange}
                        type="password"
                        id="password"
                        placeholder="Password"
                    />
                    <button
                        type="submit"
                        onClick={this.handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;