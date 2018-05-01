import React , { Component } from 'react'

class Todos extends Component{
	render()
	{
		return (
			<React.Fragment>
				<section className="main">
					<label htmlFor="toggle-all">Mark all as complete</label>
						<input id="toggle-all" className="toggle-all" type="checkbox" onClick={() => { this.props.allDone() }}/>
						<ul className="todo-list">
							{this.props.todos.map( (todo , i) => (
								<li key={i}
									className={todo.done ? 'completed' : ''}
								>
									<div className="view">
										<input className="toggle" type="checkbox" onChange={ () => { this.props.toggleDone(todo) } } checked={todo.done}/>
										<label>{todo.task}</label>
										<button className="destroy" onClick={ () => { this.props.delete(todo) } }></button>
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