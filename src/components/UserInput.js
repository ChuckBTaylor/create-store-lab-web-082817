import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: "",
    hometown: ""
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
    this.setState({
      username: "",
      hometown: ""
    })
  }

  handleUsernameChange = (ev) => {
    this.setState({
      username: ev.target.value
    })
  }

  handleHometownChange = (ev) => {
    this.setState({
      hometown: ev.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleUsernameChange} value={this.state.username}/>
        <input type="text" value={this.state.hometown} onChange={this.handleHometownChange} />
        <input type='submit' />
      </form>
    );
  }
};

export default UserInput;
