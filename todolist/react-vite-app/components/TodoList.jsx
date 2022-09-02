import React from 'react'
import propTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onDoneHandler, onDeleteHandler}) => {
  return (
    <div>
      {todos.length === 0 && <div className='note'>Bạn hãy thêm nhân viên vào .</div>}
      {
        todos.length > 0 &&
        <div>
          {
            todos.map((todo, index) => {

              return <Todo index={index}
                {...todo}
                onDoneHandler={onDoneHandler}
                onDeleteHandler={onDeleteHandler} 
                key = {index}/>
            })
          }
        </div>
      }
    </div>
  )
}

TodoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.shape(Todo)),
  onDoneHandler: propTypes.func.isRequired,
  onDeleteHandler: propTypes.func.isRequired
}

export default TodoList