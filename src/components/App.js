import React , { Component } from 'react'

import Header from './Header'
import Todos from './Todos'
import Footer from './Footer'
import { filter , map } from 'ramda'


class App extends Component{

	state = { todos: {} , filter: 'all' }

	componentDidMount()
	{
		const localStorageTodos = localStorage.getItem('todos');
		this.setState({ todos: JSON.parse(localStorageTodos) || {} });
	}

	componentDidUpdate()
	{
		localStorage.setItem('todos' , JSON.stringify(this.state.todos) || {} )
	}

	addTodo = newTask => {

		if(!newTask) return; // input is empty then stop here...

		// 1. copy todos array
		const todos = this.state.todos;
		// 2. push a new item to array
		todos[`todo-item-id-${Date.now()}${Math.random() ** 3}`] = { task: newTask , done: false };
		// 3. update todos state
		this.setState({ todos });
	}

	deleteTodo = key => {
		// 1. Copy todos array from state
		const todos = this.state.todos;
		delete todos[key];
		// 3. update todos state
		this.setState({ todos });
	}

	updateTodo = (key , newTask) => {
		const todos = this.state.todos;
		todos[key].task = newTask;
		this.setState({ todos });
	}

	toggleDone = key => {
		// 1. Copy todos array from state
		const todos = this.state.todos;
		// 3. make reverse to done filed on index position
		todos[key].done = !todos[key].done;
		// 4. update state
		this.setState({ todos });
	}

	allDone = () => {
		const todos =  map( todo => ({ task: todo.task , done: true }) , this.state.todos );
		this.setState({ todos });
	}

	clearDoneTodo = () => {
		// Get all undone todos
		let todos = filter( todo => !todo.done , this.state.todos );
		// update todos state with only undone todos :D
		this.setState({ todos });
	}

	/**
	 * Calculations
	 */
	unDoneTaskCount = () => 
		 Object.keys(this.state.todos)
		.filter( key => !this.state.todos[key].done )
		.length;
		
	doneTaskCount = () => 
		 Object.keys(this.state.todos)
		.filter( key => this.state.todos[key].done )
		.length;
	totalTodo = () => 
		Object.keys(this.state.todos)
		.length;

	/**
	 * Filtered Todo
	 */
	filteredTodo = () => {
		let filtered;
		if(this.state.filter === 'all' || !this.state.filter)
			filtered = this.state.todos;
		if(this.state.filter === 'undone')
			filtered = filter( todo => !todo.done , this.state.todos );
		if(this.state.filter === 'done')
			filtered = filter( todo => todo.done , this.state.todos );
		return filtered;
	}

	handleFilter = filter => {
		if(!filter) this.setState({ filter: 'all' })
		else this.setState({ filter })
	}


	render()
	{
		return (
			<React.Fragment>
				<section className="todoapp">
					<Header addTodo={this.addTodo}/>
					<section className="main">
						<input id="toggle-all" className="toggle-all" type="checkbox" onClick={ this.allDone } />
						<label htmlFor="toggle-all">Mark all as complete</label>
						<Todos
							todos={this.filteredTodo()}
							delete={this.deleteTodo}
							toggleDone={this.toggleDone}
							update={this.updateTodo}
						/>
						<Footer 
							clearDoneTodo={this.clearDoneTodo}
							totalTodo={this.totalTodo}
							currentFilter={this.state.filter}
							unDoneTaskCount={this.unDoneTaskCount}
							doneTaskCount={this.doneTaskCount}
							handleFilter={this.handleFilter}
						/>
						
					</section>
				</section>
			</React.Fragment>
		)
	}
}
export default App