import React from 'react'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)

    this.defaultState = {
      text: '',
      priority: "Công nhân"
    }

    this.state = this.defaultState;
  }

  onChangeHandler = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    });
  }

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onAddTodoHandler(this.state);
    this.setState(this.defaultState);
  }

  render() {
    const { text, priority} = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input name="text"
               value={text}
               onChange={this.onChangeHandler} 
               className="input size"
               placeholder="Tên nhân viên"/>
        <select name="priority"
                value={priority}
                onChange={this.onChangeHandler}
                className="select size">
          <option value={"Công nhân"}>Công nhân</option>
          <option value={"Tổ trưởng"}>Tổ trưởng</option>
          <option value={"Quản đốc"}>Quản đốc</option>
          <option value={"Giám đốc"}>Giám đốc</option>
        </select>
        <button className='add size'>Thêm </button>
      </form>
    )
  }
}

export default AddTodo 