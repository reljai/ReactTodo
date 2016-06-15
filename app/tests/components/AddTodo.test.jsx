var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    
    it('should call handleNewTodo if text entered', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo handleNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        
        addTodo.refs.todoText.value = 'new valid todo';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith('new valid todo');
    });
    
    it('should NOT call handleNewTodo if no text entered', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo handleNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        
        addTodo.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});
