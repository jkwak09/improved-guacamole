import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
    //function binds here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    alert('A message was submitted: ' + this.state.message);
    event.preventDefault();
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Message:
            <input type="text" name="message" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  };
};

export default App;
