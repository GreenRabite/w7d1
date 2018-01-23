import React from 'react';

class TodoList extends React.Component {

  render() {
    const list = this.props.todos.map((item, i) => <li key={i}>{item.title}</li>);

    return(
      <div>
      <h3>Todo list</h3>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}

export default TodoList;
