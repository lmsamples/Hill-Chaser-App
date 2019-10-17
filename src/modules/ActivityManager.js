const remoteURL = "http://localhost:5002"

export default {
    getActivity(id) {
        return fetch(`${remoteURL}/workouts/${id}`).then(result => result.json())
    },

    getAllRuns() {
        return fetch(`${remoteURL}/workouts?activityId=${localStorage.getItem("userId")}&userId=1`).then(result => result.json())
    },

    postActivity(newActivity) {
        return fetch(`${remoteURL}/workouts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newActivity)
        }).then(data => data.json())
    },

    deleteActivity(id) {
        return fetch(`${remoteURL}/workouts/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    }
    
}