import React , { Component } from 'react'
import classNames from 'classnames'
class Todos extends Component{

	state = {
		editingId: null,
		filter: 'all'
	}

	delete = key => e => {
		this.props.delete(key)
	}

	toggleDone = key => e => {
		this.props.toggleDone(key);
	}

	startEditing = key => e => {
		this.setState({ editingId: key })
	}

	doneEdit = (key) => e => {
		this.setState({ editingId: null });
		this.props.update(key, document.getElementById('todo-id-' + key).value );
	}

	handleOnEnter = (key) => e => {
		if(e.key === 'Enter')
		{
			this.setState({ editingId: null });
			this.props.update(key, document.getElementById('todo-id-' + key).value );
		}
	}

	render()
	{
		return (
			<React.Fragment>
				<ul className="todo-list">
					{ Object.keys(this.props.todos).map( key => (
						<li 
							className={
								classNames({
									completed: this.props.todos[key].done,
									editing: this.state.editingId === key
								})
							} 
							key={key}
						>
							<div className="view">
								<input 
									className="toggle" 
									type="checkbox" 
									onClick={this.toggleDone(key)} 
									checked={this.props.todos[key].done}
								/>
								<label 
									onDoubleClick={this.startEditing(key)}
								>{this.props.todos[key].task}</label>
								<button className="destroy" onClick={this.delete(key)}></button>
							</div>
							<input 
								className="edit" 
								autoFocus={this.state.editingId === key}
								defaultValue={this.props.todos[key].task}
								id={'todo-id-' + key}
								onBlur={this.doneEdit(key)}
								onKeyPress={this.handleOnEnter(key)}
							/>
						</li>
					) ) }
				</ul>
			</React.Fragment>
		)
	}
}
export default Todos