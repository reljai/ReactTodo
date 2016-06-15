var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        
        var todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.props.handleNewTodo(todoText);
        }
    },
    
    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
                    <input type="text" ref="todoText" placeholder="Enter todo here"/>
                    <button className="button expanded">Add</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;