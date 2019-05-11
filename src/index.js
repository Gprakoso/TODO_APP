import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormTodo from "./Component/todo/form";
import ListTodo from "./Component/todo/list";
import ItemTodo from "./Component/todo/item";
import "./styles.css";
// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    // this.apiUrl = "https://5cd55f3f9c31c600148a98ed.mockapi.io/api/v1/todos";
  }

  submitTodo(val) {
    // Update todos
    const { todos } = this.state;
    const newItem = todos.concat([val]);
    // Update state
    this.setState({ todos: newItem });
  }

  deleteTodo(val) {
    const indexItem = this.state.todos.indexOf(val);
    this.state.todos.splice(indexItem, 1);
    // Update state
    this.setState({ todos: this.state.todos });
  }

  deleteAllTodo() {
    this.setState({ todos: [] });
  }

  // componentDidMount() {
  //   // Make HTTP reques with Axios
  //   axios.get(this.apiUrl).then(res => {
  //     // Set state with result
  //     console.log(res.data);
  //     this.setState({ todos: res.data });
  //   });
  // }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>Todo App</h1>
        <FormTodo submitTodo={val => this.submitTodo(val)} />
        <ListTodo title={`List of my todos (${todos.length})`}>
          <ul>
            {todos.map((todo, index) => (
              <ItemTodo
                todo={todo}
                key={index}
                deleteTodo={item => this.deleteTodo(item)}
              />
            ))}
            {todos.length > 0 && (
              <button className="remove" onClick={() => this.deleteAllTodo()}>
                Clear all
              </button>
            )}
            {todos.length < 1 && <p style={{ color: "grey" }}> No Todo</p>}
          </ul>
        </ListTodo>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
// dom rendering
ReactDOM.render(<App />, rootElement);
