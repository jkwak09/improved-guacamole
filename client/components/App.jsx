import React from 'react';
import axios from 'axios';
import "../styles/style.css"

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

    axios.post('/post', {
      message: this.state.message
    })
    .then(function (response) {
      console.log(response);
      this.setState({message: ''});
    })
    .catch(function (error) {
      console.log(error);
    });
    event.preventDefault();
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label className="form-input">
            Title:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <label className="form-input">
            Text:
            <input type="text" name="text" onChange={this.handleChange} />
          </label>
          <label className="form-input">
            Link:
            <input type="text" name="link" onChange={this.handleChange} />
          </label>
          <label className="form-input">
            Thumbnail URL:
            <input type="text" name="thumb" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  };
};

export default App;
