var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

var unsubscribe = store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('sleep a little'));
store.dispatch(actions.setSearchText('little'));
store.dispatch(actions.toggleShowCompleted());

// load Foundation
$(document).foundation();

// app css
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
    <TodoApp/>,
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