import React, { Component } from 'react';

import './App.css';

import TodoList from './TodoList';
import TodoCreation from './TodoCreation';
import { retrieve, create, update } from './todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  async componentDidMount() {
    const todos = await retrieve();
    this.setState({
      todos
    });
  }

  render() {
    const { todos } = this.state;
    return <div>
      <TodoCreation onCreate={this.handleCreation} />
      <TodoList onDoneChange={this.handleDoneChange} todos={todos} />
    </div>
  }

  handleCreation = async (todoContent) => {
    console.log('creating');
    const todo = await create(todoContent);
    this.setState((currentState) => {
      return {
        todos: [...currentState.todos, todo ]
      }
    })
  }

  handleDoneChange = async (todoId, newDone) => {
    console.log('changing');
    const { todos } = this.state;
    const toUpdate = todos.find(todo => todo._id === todoId);
    const result = await update(todoId, {
      content: toUpdate.content,
      done: newDone,
    });
    Object.assign(toUpdate, result);
    this.setState((currentState) => {
      return { todos };
    });
  }
}

export default App;
