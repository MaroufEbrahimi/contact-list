import React, { Component } from "react";

import "./AddContact.css";

class AddContact extends Component {
  state = {
    name: "",
    number: "",
    file: "",
  };

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ file: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.name === " " ||
      this.state.number === "" ||
      this.state.number === " "
    ) {
      alert("All the field are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", number: "", file: "" });
  };

  render() {
    return (
      <div className="login_container">
        <form onSubmit={this.add}>
          <div className="input_box">
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              required
            />
            <span></span>
            <label>User Name</label>
          </div>

          <div className="input_box">
            <input
              type="tel"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
              required
            />
            <span></span>
            <label>Phone Number</label>
          </div>

          <div className="file_handler">
            <input
              type="file"
              name="image-upload"
              id="input"
              accept="image/*"
              onChange={this.imageHandler}
            />
            <label htmlFor="input" className="image-upload">
              <i className="bi bi-image-fill" title="choose your photo"></i>
            </label>
          </div>

          <div className="submit">
            <input type="submit" value="Add" className="btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
