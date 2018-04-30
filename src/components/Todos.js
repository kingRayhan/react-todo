import React , { Component } from 'react'

class Todos extends Component{


	delete = todo => {
		this.props.delete(todo);
	}

	toggleDone = todo =>
	{
		this.props.toggleDone(todo);
	}
	ALLLLLDone = () => {
		this.props.allDone();
	}
	render()
	{
		return (
			<React.Fragment>
				<section className="main">
					<label htmlFor="toggle-all">Mark all as complete</label>
						<input id="toggle-all" className="toggle-all" type="checkbox" onClick={this.ALLLLLDone}/>
						<ul className="todo-list">
							{this.props.todos.map( (todo , i) => (
								<li key={i}
									className={todo.done ? 'completed' : ''}
								>
									<div className="view">
										<input className="toggle" type="checkbox" onChange={ () => { this.toggleDone(todo) } } checked={todo.done}/>
										<label>{todo.task}</label>
										<button className="destroy" onClick={ () => { this.delete(todo) } }></button>
									</div>
									<input className="edit" />
								</li>
							) )}
						</ul>
				</section>
			</React.Fragment>
		)
	}
}
export default Todos