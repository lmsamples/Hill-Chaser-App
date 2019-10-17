import React, { Component } from 'react'
import RunCard from './RunCard'
import ActivityManager from '../../modules/ActivityManager'

class RunList extends Component {
    state = {
        runs: [],
    }


    componentDidMount() {
        ActivityManager.getAllRuns().then((runs) => {
            this.setState({
                runs: runs
            })
        })
    }

    render() {
        return (
            <div className="run-page">
                <div className="form-area">
                <form>
                    <input id="run-post-location" placeholder="location" />
                    <input id="run-post-distance" placeholder="distance" />
                    <input id="run-post-pace" placeholder="pace" />
                    <input type="date" id="run-post-date" />
                    <button id="run-post-save">Save</button>
                </form>
                </div>
                {this.state.runs.map(run => <RunCard key={run.id} run={run} />
                )}
            </div>
        )
    }
}

export default RunList