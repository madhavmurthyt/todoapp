import React from 'react';
function TodoItem( {task, deleteTask, toggleCompleted}) {
    function handlechange() {
        toggleCompleted(task.id);
    }

    return (
        <div className='todo-list'>
            
           
            <input type="checkbox" checked={task.completed} onChange = {handlechange} />
            {task.text}
        
            <button onClick = {() => deleteTask(task.id)}>
                X
            </button>
        </div>
    );
}

export default TodoItem;