import React from 'react';

const TodoForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmit}>
        <div className='row mt-4'>
          <div className='col-md-10 col-sm-12'>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                name='newTodo'
                id='newTodo'
                onChange={props.newTodoChanged}
                value={props.newTodo}
                placeholder='Things to do...'
              />
            </div>
          </div>
          <div className='col-md-2 col-sm-12'>
            <button className='btn btn-light btn-block' type='submit'>
              Add
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default TodoForm;
