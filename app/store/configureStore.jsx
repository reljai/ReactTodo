import * as redux from 'redux';
import reduxThunk from 'redux-thunk';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
    });
    
    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(reduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    
    return store;
};