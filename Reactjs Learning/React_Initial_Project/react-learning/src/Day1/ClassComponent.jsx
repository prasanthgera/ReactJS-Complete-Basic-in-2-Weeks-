import React, { Component } from 'react'

export default class ClassComponent extends Component {
    // constructor(){
    //     super()
     
    // }
       state={
            name:'',
            Forname:'',
            count:0
        }
   
  
    render() {
        return (
            <div>
                <h1 style={{ color: 'red' }}>Welcome To ReactJS</h1>

                <h2 style={{ color: 'Green' }}>
                    Class Component
                </h2>      
                <div>
                    <h2>state Concept: {this.state.name} {this.state.Forname}{this.state.count}</h2>
                </div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
            </div>
        )
    }
}
