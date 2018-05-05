import React , { Component } from 'react'

import Header from './Header'
import Todos from './Todos'
import Footer from './Footer'

class App extends Component{

	state = { todos: {} }

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
		todos[`todo-item-id-${Date.now()}`] = { task: newTask , done: false };
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
		// 1. Copy todos array from state
		let tempTodos = this.state.todos;
		// 2. create update tempTodos array with done: true to all item
		tempTodos = tempTodos.map( todo => ( { task: todo.task , done: true } ) );
		// 3. Update state
		this.setState({ todos: tempTodos });
	}

	clearAllTodos = () => {
		this.setState({ todos: {} })
	}




	render()
	{

		return (
			<React.Fragment>
				<section className="todoapp">
					<Header addTodo={this.addTodo}/>
					<section className="main">
						<input id="toggle-all" className="toggle-all" type="checkbox" />
						<label htmlFor="toggle-all">Mark all as complete</label>
						<Todos 
							todos={this.state.todos}
							delete={this.deleteTodo}
							toggleDone={this.toggleDone}
							update={this.updateTodo}
						/>
						<Footer clearAll={this.clearAllTodos} todos={this.state.todos} />
						
					</section>
				</section>
			</React.Fragment>
		)
	}
}
export default App