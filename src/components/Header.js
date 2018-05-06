import React , { Component } from 'react'	

class Header extends Component{

	editTodoInfo = {
	    fontSize: '14px',
	    display: 'block',
	    marginTop: '35px',
	    color: '#333',
	    fontWeight: 400
	}

	update = e =>
	{
		e.preventDefault();
		this.props.addTodo(e.target.querySelector('.new-todo').value);
		e.target.querySelector('.new-todo').value = '';
	}
	render()
	{
		return (
			<React.Fragment>
				<header className="header">
					<h1>React Todos <span style={this.editTodoInfo}>Double click to edit todo</span></h1>
					<form onSubmit={this.update}>
						<input className="new-todo" placeholder="What needs to be done?"/>
					</form>
				</header>
			</React.Fragment>
		)
	}
}
export default Header