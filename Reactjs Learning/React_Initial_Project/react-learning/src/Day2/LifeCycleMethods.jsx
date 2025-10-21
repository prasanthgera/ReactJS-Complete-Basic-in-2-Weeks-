import React, { Component } from 'react'
 class LifeCycleMethods extends Component {

  constructor() {
        super();

    this.state = {
        bool:false };
    console.log("Constructor called");
  }
   componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')

    }
   
   
   handleData=()=>{
    this.setState({bool:true})
   }
   deleteData=()=>{
    this.setState({bool:false})
   }
  render() {
    return (
      <div>
        <h1>LifeCycle Methods</h1>
        {this.state.bool ? <ChildComponent /> : <h2>Child is not rendered</h2>}
        <button onClick={this.handleData}>Show Child </button>&nbsp;&nbsp;
        
        <button onClick={this.deleteData}>Hide Child</button>
      </div>
    );
  }


 
 
}
class ChildComponent extends Component {
  componentWillUnmount() {
    console.log("Child component will unmount!");
  }

  render() {
    return (
      <div>
        <h1>Child Component Render</h1>
      </div>
    );
  }
}
export default LifeCycleMethods


