var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
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
    
    render: function() {
        return (
            <div>
                <TodoList todos={this.state.todos}/>
            </div>
        );
    },
});

module.exports = TodoApp;