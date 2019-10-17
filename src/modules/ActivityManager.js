const remoteURL = "http://localhost:5002"

export default {
    getActivity(id) {
        return fetch(`${remoteURL}/workouts/${id}`).then(result => result.json())
    },
    getAllRuns() {
        return fetch(`${remoteURL}/workouts?activityId=1&userId=1`).then(result => result.json())
    }
}