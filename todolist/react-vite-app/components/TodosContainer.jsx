import React from 'react'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

class TodosContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    // Get todos (from api, for example)
    this.setState({
      todos: [

      ]
    })
  }

  onDoneHandler = (index, event) => {
    const todos = this.state.todos.slice(0);
    todos[index].done = event.target.checked;
    this.setState({ todos });
  }

  onDeleteHandler = index => {
    const todos = this.state.todos.slice(0);
    todos.splice(index, 1);
    this.setState({ todos });
  }

  onAddTodoHandler = newTodo => {
    const todos = this.state.todos.slice(0);
    todos.push(newTodo);
    this.setState({todos});
  }

  render() {
    return (
      <div>
        <AddTodo onAddTodoHandler={this.onAddTodoHandler} />
        <TodoList todos={this.state.todos}
                  onDoneHandler={this.onDoneHandler}
                  onDeleteHandler={this.onDeleteHandler} />

      </div>
    )
  }
}

export default TodosContainer 