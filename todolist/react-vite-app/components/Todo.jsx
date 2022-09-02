import React from 'react'
import propTypes from 'prop-types'

const Todo = ({index, text, done, priority, onDoneHandler, onDeleteHandler}) => {

  const todoStyle = {
    border: '1px solid black',
    padding: '20px',
    marginTop: '20px'
  }

  return (
    <div className="todo"
      style={todoStyle}>
      <h4 >{text}</h4>
      <div>Chức vụ: {priority}</div>
      <div>
        <label>
          {done ? 'Đã xác nhận' : 'Xác nhận lại'}
          <input type="checkbox"
            checked={done}
            onChange={event => onDoneHandler(index, event)} />
        </label>
        <button onClick={() => onDeleteHandler(index)}>Delete</button>
      </div>
    </div>
  )
};

Todo.propTypes = {
  index: propTypes.number.isRequired,
  text: propTypes.string.isRequired,
  done: propTypes.bool,
  priority: propTypes.number,
  onDoneHandler: propTypes.func.isRequired,
  onDeleteHandler: propTypes.func.isRequired
}

Todo.defaultProps = {
  priority: "Công nhân"
}

export default Todo 