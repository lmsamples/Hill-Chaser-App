const remoteURL = "http://localhost:5002"

export default {
    getUser(user) {
        return fetch(`${remoteURL}/users?name=${user}`).then(result => result.json())
    },
    getAllUsers() {
        return fetch(`${remoteURL}/users`).then(result => result.json())
    },
    postUser(userData) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).then(data => data.json())
    }
}
