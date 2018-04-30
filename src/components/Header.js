import React , { Component } from 'react'	

class Header extends Component{

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
					<h1>React Todos</h1>
					<form action="/" onSubmit={this.update}>
						<input className="new-todo" placeholder="What needs to be done?"/>
					</form>
				</header>
			</React.Fragment>
		)
	}
}
export default Header