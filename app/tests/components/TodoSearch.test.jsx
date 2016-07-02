var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });
    
    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        const searchText = 'niko';
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText,
        };
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoSearch));
        
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(action);
    });
    
    it('should dispatch TOGGLE_SHOW_COMPLETED on checkbox state changes', () => {
        const action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        var searchText = '';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoSearch));
        
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(action);        
    });
});