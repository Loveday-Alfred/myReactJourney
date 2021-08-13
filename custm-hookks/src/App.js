import { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetch from './hooks/useFetch';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformedTasks = tasksObj => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }

  const { isLoading, error, sendRequest: fetchTasks } = useFetch(
    {url: 'https://dummy-fdf2b-default-rtdb.firebaseio.com/tasks.json'},
    transformedTasks
  );

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
}

export default App;


// import BackwardCounter from './components/BackwardCounter';
// import ForwardCounter from './components/ForwardCounter';

// function App() {
//   return (
//     <>
//       <ForwardCounter />
//       <BackwardCounter />
//     </>
//   );
// }

// export default App;