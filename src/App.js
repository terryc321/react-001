import {
    useState,
    useEffect
}
from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    // fetch api - async await
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])


    // fetch tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        console.log(data)
        return data
    }

    // fetch one task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        console.log(data)
        return data
    }



    const addTask = async (task) => {

        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()

        console.log(data)

        setTasks([...tasks, data])

        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = { id , ...task}
        // setTasks([...tasks, newTask])
    }


    const deleteTask = async (id) => {
        //alert(`task ${id} to be deleted !`)

        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        setTasks(tasks.filter((task) => task.id !== id));
        //console.log('deleted task id =',id)
    }


    /*
    for id , 
    */
    const toggleReminder = async (id) => {

        const taskToToggle = await fetchTask(id)

        const updTask = {
            ...taskToToggle,
            reminder: !taskToToggle.reminder
        }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        //console.log(id);
        setTasks(tasks.map((task) =>
            task.id === id ? {
                ...task,
                reminder: data.reminder
            } : task
        ))

    }


    return ( <div className = "container" >

             <Header title={"Task Tracker" } onAdd={ () => setShowAddTask(!showAddTask) } showAdd={showAddTask} />
	     
	     {
        showAddTask &&
        <AddTask onAdd = {addTask} />}

        {
            tasks.length > 0 ? (
		
		    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                'No Tasks To Show'
            )
        }

        </div>

    );
}

export default App;

