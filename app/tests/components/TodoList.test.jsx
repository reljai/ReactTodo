var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    
    it('should render one Todo component for each item', () => {
        var todos = [{
            id: 1,
            text: 'do something',
            completed: false,
            compleatedAt: undefined,
            createdAt: 500,
        }, {
            id: 2,
            text: 'do something else',
            completed: false,
            compleatedAt: undefined,
            createdAt: 500,
        }];
        
        var store = configureStore.configure({
            todos,
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodo);
        expect(todosComponents.length).toBe(todos.length);
    });
    
    it('should render empty text there are no todos', () => {
        var todos = [];
        
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);
    });
});