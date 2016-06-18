var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    
    it('should exist', () => {
        expect(TodoApi).toExist();
    });
    
    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 1,
                text: 'test',
                completed: false,
            }];
            TodoApi.setTodos(todos);
            
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });
        
        it('should not set invalid todos array', () => {
            var badTodos = {foo: 'bar'};
            
            TodoApi.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });
    
    describe('getTodos', () => {
        it('should return empty array for local storage data', () => {
            var actualTodos = TodoApi.getTodos();
            
            expect(actualTodos).toEqual([]);
        });
        
        it('should return valid data', () => {
            var todos = [{
                id: 1,
                text: 'test',
                completed: false,
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual(todos);            
        });
    });
});
