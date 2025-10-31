import React, { Component } from "react";

export default class TestClass extends Component {
  state = {
    age: 12,
    users: [],
  
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
        if(!res.ok){
            alert('Network issue')
        }
        return res.json()
    }).then((dd)=>{
        this.setState({
            users:dd
        })

    })
      
     
  }
  componentDidUpdate(previous,current){
    if(previous.age !=current.age){
       alert(`update count ${current.age} to ${this.state.age}`)
    }
  }
  componentWillUnmount(){
    
  }

  handleClick = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    const { age, users } = this.state;

    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {age}</p>
        <button onClick={this.handleClick}>Increase </button>
        <hr />
        <h3>User List from API</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
      </div>
    );
  }
}
