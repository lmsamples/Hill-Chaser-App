import React, { Component } from 'react'
import UserManager from '../../modules/UserManager'

class Register extends Component {
    state = {
        name: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    addUser = evt => {
        evt.preventDefault()
        if (this.state.name === "" || this.state.password === "") {
            window.alert("Please input name and password");
        } else {
            UserManager.getUser(this.state.name).then(userBack => {
                if (userBack[0]) {
                    window.alert("User already exists")
                }
                else {
                    const newUser = {
                        name: this.state.name,
                        password: this.state.password
                    }

                    UserManager.postUser(newUser)
                        .then((newUserObject) => {
                            localStorage.setItem("userId", newUserObject.id)
                        }
                        )
                        .then(() => this.props.history.push("/"));

                }
            }
            )
        }
    }

    render() {
        return (
            <div className="register-field">
                <h2>Register</h2>
                <form>
                    <input type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Username"
                    />
                    <input type="password"
                        required
                        onChange={this.handleFieldChange}
                        id="password"
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        onClick={this.addUser}>
                        Register</button>
                </form>
            </div>
        )
    }
}

export default Register;