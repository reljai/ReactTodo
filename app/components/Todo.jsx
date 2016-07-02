var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
    render: function() {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        
        var renderDate = () => {
            var msg = 'Created ';
            var timestamp = createdAt;
            if (completed) {
                timestamp = completedAt;
                msg = 'Completed ';
            }
            return msg + moment.unix(timestamp).format('MMM Do YYYY @h:mm a');
        };
        
        return (
            <div className={todoClassName} onClick={() => {
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    },
});

export default connect()(Todo);