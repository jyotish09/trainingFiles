// Better One https://codepad.co/snippet/EH5sgBJT


function get_current_todos() {
    console.groupCollapsed('get_current_todos()');
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    console.log(todos_str);
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    console.log(todos);
    console.groupEnd();
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    console.groupCollapsed('add() task');
    console.log(task);
    console.groupEnd();
    var todos = get_current_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function remove() {
    console.groupCollapsed('remove() taskId');
    var id = this.getAttribute('id');
    console.log(id);
    var todos = get_current_todos();
    console.log('todo');
    console.log(todos);
    todos.splice(id, 1);
    console.log(todos);
    localStorage.setItem('todo', JSON.stringify(todos));
    console.groupEnd();
    show();
    return false;
}

function show() {
    var todos = get_current_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();
