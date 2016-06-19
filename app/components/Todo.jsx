var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    },
});

module.exports = Todo;