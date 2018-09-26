import React, { Component } from 'react';

export default class TodoCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCreate(this.state.value);
    this.setState({ value: '' })
  }

  render() {
    return <div className="row padded">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Text" value={this.state.value} onChange={this.handleChange}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Add todo</button>
            </span>
          </div>
        </div>
      </div>
  }
}
