var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoApi = require('TodoApi');

export var TodoList = React.createClass({
    render: function() {
        var {todos, showCompleted, searchText} = this.props;
        
        var renderTodos = () => {
            if (!todos || todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                );
            }
            return TodoApi.filterTodos(todos, searchText, showCompleted).map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    },
});

export default connect(
    (state) => {
        return state;
    }
)(TodoList);