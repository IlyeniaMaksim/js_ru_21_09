import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    user: "",
    text: "",
    isInvalidLength: false
  };
  handleSubmit = event => {
    let userValue = this.refs.userRef.value;
    let textValue = this.refs.textRef.value;
    // TODO: не работает [this.refs.textRef.value] если использовать 'ref={this.setUserRef}' но работает если использовать 'ref="userRef"'
  };
  setUserRef(user) {
    this.user = user;
  }
  setTextRef(text) {
    this.text = text;
  }
  handleUserOnChange = event => {
    if (event.target.value.length < 10) {
      this.setState({
        user: event.target.value
      });
    } else {
      if (event.target.value.length > 50) {
        this.setState({
          user: ""
        });
      } else {
        this.setState({
          user: event.target.value,
          isInvalidLength: true
        });
      }
    }
  };

  handleTextOnChange = event => {
    if (event.target.value.length < 10) {
      this.setState({
        text: event.target.value,
        isInvalidLength: false
      });
    } else {
      if (event.target.value.length > 50) {
        this.setState({
          text: ""
        });
      } else {
        this.setState({
          text: event.target.value,
          isInvalidLength: true
        });
      }
    }
  };

  render() {
    const { user, text, isInvalidLength } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>User</td>
              <td>Text</td>
            </tr>
            <tr>
              <td>
                <input
                  ref="userRef"
                  // ref={this.setUserRef}
                  onChange={this.handleUserOnChange}
                  value={user}
                  type="text"
                  name="user"
                />
              </td>
              <td>
                <input
                  ref="textRef"
                  onChange={this.handleTextOnChange}
                  value={text}
                  type="text"
                  name="text"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button
          type="button"
          name="submitBtn"
          disabled={isInvalidLength}
          onClick={this.handleSubmit}
        >
          submit
        </button>
      </form>
    );
  }
}

export default CommentForm;
