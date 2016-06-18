var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
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
                }
            ]
        });
    },
    
    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState(updatedTodos);
    },
    
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    
    render: function() {
        return (
            <div className="row">
                <div className="column medium-4 small-6 small-centered">
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList todos={this.state.todos} onToggle={this.handleToggle}/>
                    <AddTodo handleNewTodo={this.handleNewTodo}/>
                </div>
            </div>
        );
    },
});

module.exports = TodoApp;