import react, {useState} from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const[tasks, setTasks] = useState([
        {
            id:1,
            text: 'House warming ceremony',
            completed: true
        },
        {
            id:2,
            text: 'PTM at School',
            completed: false
        }
    ]);

    const[text, setText] = useState('');
        function addTask(text) {
            const newTask = {
                id: Date.now(),
                text,
                completed: false
            };

            setTasks([...tasks, newTask]);
            setText('');
        }

        function deleteTask(id) {
            setTasks(tasks.filter(task => task.id !== id ));
        }

        function toggleCompleted(id) {
            setTasks(tasks.map(task => {
                if(task.id === id) {
                    return {...task, completed: !task.completed};
                
                } else {
                    return task;
                }
            }));
        }

        return (
            <div>
            <div className='todo-form'>
               
                 <input 
                    value = {text}
                    onChange = {(e) => setText(e.target.value)} 
                    />
               
            <button onClick={() => addTask(text)} className='add-todo'> Add </button>
            </div>
            
            
                { tasks.map(task => (
                   <TodoItem 
                   key = {task.id}
                   task = {task}
                   deleteTask = {deleteTask}
                   toggleCompleted={toggleCompleted}
                   />

                ))}
               
            </div>
            
        
        )
}

export default TodoList; 
