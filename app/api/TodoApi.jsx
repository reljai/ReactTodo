//var $ = require('jQuery');

module.exports = {
    // setTodos: function(todos) {
    //     if ($.isArray(todos)) {
    //         localStorage.setItem('todos', JSON.stringify(todos));
    //         return todos;
    //     }
    // },
    
    // getTodos: function() {
    //     var todos = [];
    //     var strTodos = localStorage.getItem('todos');
        
    //     try {
    //         todos = JSON.parse(strTodos);
    //     } catch(e) {
            
    //     }
        
    //     return ($.isArray(todos) ? todos : []);
    // },
    
    filterTodos: function(todos, searchText, showCompleted) {
        var filtered = [];
        if (todos) {
            filtered = todos.filter((todo) => {
                var keep = (!todo.completed || showCompleted);
                if (keep && searchText.length > 0) {
                    keep = (todo.text.toLowerCase().indexOf(searchText) != -1);
                }
                return keep;
            });
            
            filtered.sort((a, b) => {
                if (!a.completed && b.completed) {
                    return -1;
                } else if (a.completed && !b.completed) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        return filtered;
    },
};