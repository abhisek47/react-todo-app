import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'React Todo App',
      newTodo: '',
      todo: [
        { title: 'Buy travel guidebook', done: false },
        { title: 'Pack bagpack', done: false },
        { title: 'Book museum tour', done: false },
        { title: 'Finish design for new website', done: false },
      ],
    };
  }

  formSubmit = (event) => {
    event.preventDefault();
    this.state.newTodo === ''
      ? this.setState({
          todo: [...this.state.todo],
          newTodo: '',
        })
      : this.setState({
          todo: [
            ...this.state.todo,
            { title: this.state.newTodo, done: false },
          ],
          newTodo: '',
        });
  };

  newTodoChanged = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  toggleTodoDone = (event, index) => {
    console.log(event.target.checked);
    const todo = [...this.state.todo];
    todo[index] = { ...todo[index] };
    todo[index].done = event.target.checked;
    this.setState({
      todo,
    });
  };

  removeTodo = (event, index) => {
    const todo = [...this.state.todo];
    todo.splice(index, 1);
    this.setState({
      todo,
    });
  };

  todoDone = (event, index) => {
    const todo = [...this.state.todo];
    todo[index] = { ...todo[index] };
    todo[index].done = !todo[index].done;
    this.setState({
      todo,
    });
  };

  allDone = () => {
    const todo = this.state.todo.map((todos) => {
      return {
        title: todos.title,
        done: true,
      };
    });
    this.setState({
      todo,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='bg-primary py-4'>
          <div className='container text-light'>
            <h1 className='text-center'>{this.state.message}</h1>
            <TodoForm
              formSubmit={this.formSubmit}
              newTodoChanged={this.newTodoChanged}
              newTodo={this.state.newTodo}
            />
          </div>
        </div>
        <div className='container'>
          <TodoList
            todo={this.state.todo}
            toggleTodoDone={this.toggleTodoDone}
            removeTodo={this.removeTodo}
            todoDone={this.todoDone}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
