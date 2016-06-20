var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        //debugger;
        
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
                this.props.onToggle(id);
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

module.exports = Todo;