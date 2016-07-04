var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    
    it('should exist', () => {
        expect(TodoApi).toExist();
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
