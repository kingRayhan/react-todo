import React , { Component } from 'react'	

class Header extends Component{

	editTodoInfo = {
		    'font-size': '14px',
		    display: 'block',
		    'margin-top': '35px',
		    color: '#333',
		    'font-weight': 400
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
					<form action="/" onSubmit={this.update}>
						<input className="new-todo" placeholder="What needs to be done?"/>
					</form>
				</header>
			</React.Fragment>
		)
	}
}
export default Header