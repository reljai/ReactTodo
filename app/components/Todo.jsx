import React from 'react';
import * as Redux from 'react-redux';
import moment from 'moment';

import * as actions from 'actions';

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
                dispatch(actions.startToggleTodo(id, !completed));
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

export default Redux.connect()(Todo);