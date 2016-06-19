var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var moment = require('moment');

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
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
    
    it('should handle completed toggle', () => {
        var todoData = {
            id: 1,
            text: 'test',
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined,
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        
        todoApp.setState({todos: [todoData]});
        
        todoApp.handleToggle(todoApp.state.todos[0].id);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
        todoApp.handleToggle(todoApp.state.todos[0].id);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});