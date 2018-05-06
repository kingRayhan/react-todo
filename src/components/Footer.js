import React , { Component } from 'react'

class Footer extends Component{

	handleFilter = filter => e => {
		this.props.handleFilter(filter);
	}

	

	render = () => {
	const { 
		currentFilter:filter , 
		totalTodo , 
		unDoneTaskCount ,
		doneTaskCount ,
		clearDoneTodo
	} = this.props;

	const clearButton = <button className="clear-completed" onClick={ () => clearDoneTodo() }>Clear Completed</button>

	if( !totalTodo() ) return null; // not render when no todos in state
	return(
		<React.Fragment>
			<footer className="footer">
				<span className="todo-count"><strong>{unDoneTaskCount()}</strong> item left</span>
				<ul className="filters">
					<li>
						<a className={ filter === 'all' ? 'selected' : '' } href="javascript:void(0)" onClick={this.handleFilter('all')}>All</a>
					</li>
					<li>
						<a className={ filter === 'undone' ? 'selected' : '' } href="javascript:void(0)" onClick={this.handleFilter('undone')}>Active</a>
					</li>
					<li>
						<a className={ filter === 'done' ? 'selected' : '' } href="javascript:void(0)" onClick={this.handleFilter('done')}>Completed</a>
					</li>
				</ul>

				{ doneTaskCount() ? clearButton : '' }


			</footer>
		</React.Fragment>
		)
	}
}
export default Footer