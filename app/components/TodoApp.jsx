var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'walk Niko'
                },
                {
                    id: 2,
                    text: 'mow the lawn'
                },
                {
                    id: 3,
                    text: 'go to work'
                }
            ]
        };
    },
    
    handleNewTodo: function(text) {
        alert('new todo: ' + text);
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
                    <TodoList todos={this.state.todos}/>
                    <AddTodo handleNewTodo={this.handleNewTodo}/>
                </div>
            </div>
        );
    },
});

module.exports = TodoApp;