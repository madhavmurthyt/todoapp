import react, {useEffect, useState} from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const[tasks, setTasks] = useState([]);
    const headers = { Accept: "application/json" };
    const url = 'http://localhost:3300/todos/';
        useEffect(() => { 
            fetch(url, { method: "GET", headers })
                .then(response => response.json())
                .then(data => setTasks(data))
                .catch(error => console.log(error)); 
            
            }, []); 
          
        const[title, setTitle] = useState('');
    
        function addTask(title) { 
            const newTask = { title }; 
            console.log("newTsk    -- "+JSON.stringify(newTask));
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            })
            .then(response => response.json())
            .then(data => { setTasks([...tasks, data]); 
            setTitle(''); }) 
            .catch(error => { console.error('Error creating todo task:', error); });
}


        function deleteTask(id) {
            console.log("task id "+id);
            fetch(url+id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => { 
                if (response.ok) {
                    console.log('Todo deleted successfully!');
                    setTasks(tasks.filter(task => task.id !== id ));
                } else {
                    console.error('Failed to delete the todo.'); 
                } 
             })
             .catch(error => { console.error('Error deleting todo task:', error); });

            
        }

        function toggleCompleted(id) {
            console.log("task completed "+url+id);
            fetch(url+id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => { 
                if (response.ok) {
                    console.log('Todo completed successfully!');
                    setTasks(tasks.map(task => {
                        if(task.id === id) {
                            return {...task, completed: !task.completed};
                        
                        } else {
                            return task;
                        }
                    } ))
                } else {
                    console.error('Failed to update the todo.'); 
                } 
             })
             .catch(error => { console.error('Error updating todo task:', error); });
        }

        return (
            <div>
            <div className='todo-form'>
               
                 <input 
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)} 
                    />
               
            <button onClick={() => addTask(title)} className='add-todo'> Add </button>
            </div>
            
            
                { tasks.map(task => 
                    (
                        <TodoItem 
                        task = {task}
                        deleteTask = {deleteTask}
                        toggleCompleted={toggleCompleted}
                        />

                    ) 
               
                )}
               
            </div>
            
        
        )
}

export default TodoList; 
