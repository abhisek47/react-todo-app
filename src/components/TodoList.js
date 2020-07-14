import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <React.Fragment>
      <ul className='list-group py-4'>
        {props.todo.map((todos, index) => {
          return (
            <TodoItem
              key={index}
              index={index}
              todos={todos}
              toggleTodoDone={props.toggleTodoDone}
              removeTodo={props.removeTodo}
              todoDone={props.todoDone}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
