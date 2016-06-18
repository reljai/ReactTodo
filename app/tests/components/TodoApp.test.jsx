var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('Todo App', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should create new todo', () => {
        var todoText = 'test';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: []});
        todoApp.handleNewTodo(todoText);
        expect(todoApp.state.todos.length).toBe(1);
        expect(todoApp.state.todos[0].text).toBe(todoText);
    });
});