import React , { Component } from 'react'

import Header from './Header'
import Todos from './Todos'


class App extends Component{

	constructor()
	{
		super();
		document.title = 'React TODO'
	}

	state = {
		todos: []
	}
	componentDidMount()
	{
		const todosArray = JSON.parse('[' + localStorage.getItem('todos') + ']')[0];
		this.setState({ todos: todosArray })
	}

	componentDidUpdate()
	{
		localStorage.setItem('todos' , JSON.stringify(this.state.todos) )
	}

	addTodo = newTask => {

		if(!newTask) return; // input is empty then stop here...

		// 1. copy todos array
		const tempTodos = this.state.todos;
		// 2. push a new item to array
		tempTodos.push({
			task: newTask,
			done: false
		})
		// 3. update todos state
		this.setState({ todos: tempTodos });
	}

	deleteTodo = todo => {
		// 1. Copy todos array from state
		const tempTodos = this.state.todos;
		// 2. find index number of targeted todo
		const index = tempTodos.indexOf(todo);
		// 3. delete targeted todo from copied array
		tempTodos.splice(index, 1);
		// 4. update state
		this.setState({ todos: tempTodos });
	}

	toggleDone = todo => {
		// 1. Copy todos array from state
		const tempTodos = this.state.todos;
		// 2. find index number of targeted todo
		const index = tempTodos.indexOf(todo);
		// 3. make reverse to done filed on index position
		tempTodos[index].done = !tempTodos[index].done;
		// 4. update state
		this.setState({ todos: tempTodos });
	}

	allDone = () => {
		// 1. Copy todos array from state
		let tempTodos = this.state.todos;
		// 2. create update tempTodos array with done: true to all item
		tempTodos = tempTodos.map( todo => ( { task: todo.task , done: true } ) );
		// 3. Update state
		this.setState({ todos: tempTodos });
	}


	render()
	{
		return (
			<React.Fragment>
				<section className="todoapp">
					<Header addTodo={this.addTodo}/>
					<Todos todos={this.state.todos} delete={this.deleteTodo} toggleDone={this.toggleDone} allDone={this.allDone} />
				</section>
			</React.Fragment>
		)
	}
}
export default App