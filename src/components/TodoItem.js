import React from 'react';
function TodoItem( {task, deleteTask, toggleCompleted} ) {
    function handlechange() {
        toggleCompleted(task.id);
    }

    return (
        <div className='todo-list'>
            
            <input key={task.id} type="checkbox" checked={task.completed} onChange = {handlechange} />
            {task.title} 
            
            <button onClick = {() => deleteTask(task.id)}>
                X
            </button>
        </div>
    );
}

export default TodoItem;

