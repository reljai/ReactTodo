var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase/';

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some search text',
        };
        
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });
    
    it('should generate ADD_TODO action', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: '123',
                text: 'walk Niko',
                completed: false,
                createdAt: 500,
            },
        };
        
        var res = actions.addTodo(action.todo);
        expect(res).toEqual(action);
    });
    
    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'walk Niko';
        
        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO',
            });
            expect(actions[0].todo).toInclude({
                text: todoText,
            });
            done();
        }).catch(done);
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
    
    it('should generate UPDATE_TODO action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 1,
            updates: {completed: false},
        };
        
        var res = actions.updateTodo(action.id, action.updates);
        expect(res).toEqual(action);
    });
    
    describe('tests with firebase todos', () => {
        var testTodoRef;
        
        beforeEach((done) => {
            testTodoRef = firebaseRef.child('todos').push();
            testTodoRef.set({
                text: 'test todo',
                completed: false,
                createdAt: 400,
            }).then(() => done());
        });
        
        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });
        
        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);
            
            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key,
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true,
                });
                expect(mockActions[0].updates.completedAt).toExist();
                
                done();
            }, done);
        });
    });
});
