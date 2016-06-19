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
    
    describe('filterTodos', () => {
        var todos = [{
           id: 1,
           text: 'First',
           completed: true,
        }, {
           id: 2,
           text: 'SeCond',
           completed: false,
        }, {
           id: 3,
           text: 'Third',
           completed: false, 
        }];
        
        it('should not filter out completed todos', () => {
            var filteredTodos = TodoApi.filterTodos(todos, '', true);
            expect(filteredTodos.length).toBe(todos.length);
        });
        
        it('should filter out completed todos', () => {
            var filteredTodos = TodoApi.filterTodos(todos, '', false);
            expect(filteredTodos.length).toBe(2);
        });
        
        it('should sort by completed status', () => {
            var filteredTodos = TodoApi.filterTodos(todos, '', true);
            expect(filteredTodos[0].completed).toBe(false);
        });
        
        it('should filter by search text', () => {
            var filteredTodos = TodoApi.filterTodos(todos, 'con', true);
            expect(filteredTodos.length).toBe(1);
        });
    });
});
