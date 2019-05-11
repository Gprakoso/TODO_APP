import React, { Component } from "react";
// class component
class FormTodo extends Component {
  constructor(props) {
    // to access props
    super(props);
    this.state = {
      todo: ""
    };
  }

  onChangeInput(e) {
    //This synthetic event is reused for performance reasonsThis synthetic event is reused for performance reasons
    e.persist();
    this.setState({
      todo: e.target.value
    });
  }

  onSubmit() {
    this.props.submitTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.todo}
          placeholder="Todo"
          onChange={e => this.onChangeInput(e)}
        />
        <button className="add" onClick={() => this.onSubmit()}>
          +
        </button>
      </div>
    );
  }
}

export default FormTodo;
