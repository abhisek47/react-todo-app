import React from 'react';

const TodoItem = (props) => {
  const { todos, index } = props;
  return (
    <React.Fragment>
      <li className='alert alert-primary d-flex flex-row align-items-center'>
        <div
          style={{
            textDecoration: todos.done ? 'line-through' : 'inherit',
          }}>
          <span className='mx-2 hidden'>
            <input
              onChange={(event) => props.toggleTodoDone(event, index)}
              type='checkbox'
              className='form-check-input'
              checked={todos.done}
            />
          </span>
          {todos.title}
        </div>
        <button
          className='btn my-2 ml-auto d-block'
          onClick={(event) => props.removeTodo(event, index)}>
          <img
            src='https://img.icons8.com/flat_round/28/000000/delete-sign.png'
            alt='delete'
          />
        </button>
        <button
          className='btn my-2 ml-2 d-block'
          onClick={(event) => props.todoDone(event, index)}>
          {/* {todos.done ? 'Undo' : 'Done'} */}
          <img
            src={
              todos.done
                ? 'https://img.icons8.com/flat_round/28/000000/circled-left.png'
                : 'https://img.icons8.com/flat_round/28/000000/checkmark.png'
            }
            alt='done'
          />
        </button>
      </li>
    </React.Fragment>
  );
};

export default TodoItem;
