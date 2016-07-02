var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {Todo} = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    
    it('should call dispatch TOGGLE_TODO action on click', () => {
        var spy = expect.createSpy();
        var todoData = {
            id: 1,
            text: 'test',
            completed: false,
        };
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(todo));
        
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: todoData.id
        });
    });
});