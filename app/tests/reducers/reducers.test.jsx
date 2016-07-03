var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('reducers', () => {
    describe('searchTextReducer ', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'search text',
            };
            
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    
    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            };
            
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
            res = reducers.showCompletedReducer(df(true), df(action));
            expect(res).toEqual(false);
        });
    });
    
    describe('todos reducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: '123',
                    text: 'walk Niko',
                    completed: false,
                    createdAt: 500,
                },
            };
            
            var res = reducers.todosReducer(df([]), df(action));
            
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.todo.text);
        });
        
        it('should add array of existing todos', () => {
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
            
            var res = reducers.todosReducer(df([]), df(action));
            
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
        
        it('should toggle todo', () => {
            const action = {
                type: 'TOGGLE_TODO',
                id: 7,
            };
            const todos = [{
                id: action.id,
                text: "foo",
                completed: false,
                createdAt: undefined,
                completedAt: undefined,               
            }];
            
            var res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toEqual(!todos[0].completed);
            expect(res[0].completedAt).toExist();
            var res2 = reducers.todosReducer(df(res), df(action));
            expect(res2[0].completed).toEqual(!res[0].completed);
            expect(res2[0].completedAt).toNotExist();
        });
    });
});