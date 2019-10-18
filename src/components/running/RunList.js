import React, { Component } from 'react'
import RunCard from './RunCard'
import ActivityManager from '../../modules/ActivityManager'

class RunList extends Component {
    state = {
        runs: [],
        runPostDistance: "",
        runPostPace: "",
        runPostLocation: "",
        runPostDate: "",
        userId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }

    componentDidMount() {
        ActivityManager.getAllRuns().then((runs) => {
            this.setState({
                runs: runs
            })
        })
    }

    deleteRun = id => {
        ActivityManager.deleteActivity(id)
        .then(() => {
            ActivityManager.getAllRuns()
            .then((newRuns) => {
                this.setState({
                    runs: newRuns
                })
            })
        })
    }

    constructNewRun = evt => {
        evt.preventDefault();
        if (this.state.runPostLocation === "" || this.state.runPostDistance === "" || this.state.runPostPace === "" || this.state.runPostDate === "") {
            window.alert("Please finish or fill out run form.")
        } else {
            const singleRun = {
                distance: this.state.runPostDistance,
                pace: this.state.runPostPace,
                location: this.state.runPostLocation,
                date: this.state.runPostDate,
                userId: parseInt(localStorage.getItem("userId")),
                activityId: 1
            }
            ActivityManager.postActivity(singleRun)
            .then(ActivityManager.getAllRuns).then(runs => {
                this.setState({runs: runs})
            })
        }
    }

    render() {
        return (
            <div className="run-page">
                <div className="form-area">
                <form>
                    <input id="runPostLocation" placeholder="location" onChange={this.handleFieldChange}/>
                    <input id="runPostDistance" placeholder="distance" onChange={this.handleFieldChange}/>
                    <input id="runPostPace" placeholder="pace" onChange={this.handleFieldChange}/>
                    <input type="date" id="runPostDate" onChange={this.handleFieldChange}/>
                    <button
                    id="run-post-save"
                    onClick={this.constructNewRun}>
                        Save
                        </button>
                </form>
                </div>
                {this.state.runs.map(run => <RunCard
                key={run.id}
                run={run}
                 deleteRun={this.deleteRun} />
                )}
            </div>
        )
    }
}

export default RunList