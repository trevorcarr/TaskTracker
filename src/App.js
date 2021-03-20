import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Apt',
        day: 'Feb 6th',
        reminder: true
    },
    {
        id: 2,
        text: 'interview',
        day: 'Feb 7th',
        reminder: true
    }
])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))

  }

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
