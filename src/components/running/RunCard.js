import React, { Component } from 'react';
class RunCard extends Component {
    render(){
        return(
            <div className="card">
            <h2>{this.props.run.location}</h2>
            <p>{this.props.run.distance} at {this.props.run.pace} pace</p>
            <p className="date">{this.props.run.date}</p>
            <div className="button-container">
                <button type="button" onClick={() => this.props.deleteRun(this.props.run.id)}>Delete</button>
                <button>Edit</button>
            </div>
            </div>
        )
    }
}

export default RunCard;