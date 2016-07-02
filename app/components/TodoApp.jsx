var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var TodoApi = require('TodoApi');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoApi.getTodos(),
        };
    },
    
    componentDidUpdate: function() {
        TodoApi.setTodos(this.state.todos);
    },
    
    handleNewTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    complatedAt: undefined,
                }
            ]
        });
    },
    
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    
    render: function() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoApi.filterTodos(todos, searchText, showCompleted);
        
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column large-5 medium-6 small-11 small-centered">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo handleNewTodo={this.handleNewTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});

module.exports = TodoApp;