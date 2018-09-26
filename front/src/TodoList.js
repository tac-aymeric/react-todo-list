import React, { Component } from 'react';
import TodoElement from './TodoElement';

export default class TodoList extends Component {
  render() {
    const { todos, onDoneChange } = this.props;
    return <div className="padded"> {
      todos.map((todo) => {
        return <TodoElement
          key={todo._id}
          id={todo._id}
          done={todo.done}
          content={todo.content}
          onDoneChange={onDoneChange}/>
      })
    }</div>
  }
}
