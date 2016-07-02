var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some search text',
        };
        
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });
    
    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'do something',
        };
        
        var res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });
    
    it('should generate ADD_TODOS action object', () => {
        const todos = [{
            id: 17,
            text: 'foo',
            completed: false,
            completedAt: undefined,
            createAt: 400,
        }];
        
        const action = {
            type: 'ADD_TODOS',
            todos: todos,
        };
        
        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });
    
    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        
        var res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });
    
    it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 1,
        };
        
        var res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    });
});
