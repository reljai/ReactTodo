var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
import Login from 'Login';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoApi = require('TodoApi');

// var unsubscribe = store.subscribe(() => {
//     var state = store.getState();
//     console.log('New state', store.getState());
//     TodoApi.setTodos(state.todos);
// });

// var initialTodos = TodoApi.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// load Foundation
$(document).foundation();

// app css
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="todos" component={TodoApp}/>
                <IndexRoute component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

/*
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
*/