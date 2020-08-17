import React,{Component} from 'react';
import { render } from '@testing-library/react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// import './App.css';
// 
class Todos extends Component{

   
render(){
   return this.props.todos.map((todo)=> (
    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
    delTodo = {this.props.delTodo}/>
   ));
}
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    
}
export default Todos;
