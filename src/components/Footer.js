import React , { Component } from 'react'

class Footer extends Component{
	render = () => {
	if( Object.keys(this.props.todos).length === 0 ) return null;
	return(
		<React.Fragment>
			<footer className="footer">
				{/*<span className="todo-count"><strong>0</strong> item left</span>*/}
				{/*<ul className="filters">
					<li>
						<a className="selected" href="javascript:void(0)">All</a>
					</li>
					<li>
						<a href="javascript:void(0)">Active</a>
					</li>
					<li>
						<a href="javascript:void(0)">Completed</a>
					</li>
				</ul>*/}
				<button className="clear-completed" onClick={ () => this.props.clearAll() }>Clear All</button>
			</footer>
		</React.Fragment>
		)
	}
}
export default Footer