var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        }
    },
    
    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
                    <input type="text" ref="todoText" placeholder="Enter todo here"/>
                    <button className="button expanded">Add</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddTodo);