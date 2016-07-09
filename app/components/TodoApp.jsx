import React from 'react';
import * as Redux from 'react-redux';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

import * as actions from 'actions';

export var TodoApp = React.createClass({
    onLogout(e) {
        e.preventDefault();
        
        this.props.dispatch(actions.startLogout());
    },
    
    render() {
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout}>Logout</a>
                </div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column large-5 medium-6 small-11 small-centered">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});

export default Redux.connect()(TodoApp);