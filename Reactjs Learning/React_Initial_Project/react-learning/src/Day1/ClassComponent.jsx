import React, { Component } from 'react'

export default class ClassComponent extends Component {
    state = {
        name: "State Management"
    }
  
    render() {
        return (
            <div>
                <h1 style={{color:'red'}}>Welcome To ReactJS</h1>

                <h2 style={{ color: 'Green' }}>
                     Class Component
                </h2>                <div>
                    <h2>state Concept: {this.state.name}</h2>
                </div>
            </div>
        )
    }
}
