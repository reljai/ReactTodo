import firebase, {firebaseRef, gitHubProvider} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText,
    };
};

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo,
    };
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null,
        };
        
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key,
            }));
        });
    };
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos,
    };
};

export var startAddTodos = () => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        return firebaseRef.child(`users/${uid}/todos`).once('value').then((snapshot) => {
            var values = snapshot.val() || {};
            var todos = [];
            Object.keys(values).forEach((id) => {
                todos.push({
                    ...values[id],
                    id,
                });
            });

            if (todos.length > 0) {
                dispatch(addTodos(todos));
            }
        });
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED',
    };
};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates,
    };
};

export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null,
        };
        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
};

export var login = (userId) => {
    return {
        type: 'LOGIN',
        uid: userId,
    };
}

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(gitHubProvider).then((result) => {
            dispatch(login(result.user.uid));
        }, (error) => {
            console.log("unable to auth", error);
        });
    };
}

export var logout = () => {
    return {
        type: 'LOGOUT',
    };
}

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            dispatch(logout());
        }, (error) => {
            console.log("failed to log out", error);
        });
    };
}