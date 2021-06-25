import { useState, useEffect } from "react";
import Actions from "./comps/Actions";
import SearchTasks from "./comps/SearchTasks";
import TaskList from "./comps/TaskList";
import AddTasks from "./comps/AddTasks";

import { useSelector } from "react-redux";

function App() {
  const [searchText, setSearchText] = useState("");
  const [actionText, setActionText] = useState("show-all");
  let tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  let tasksToShow;

  if (actionText === "show-completed") {
    tasksToShow = tasks.filter((task) => task.completed === true);
  } else {
    tasksToShow = tasks;
  }

  return (
    <div className="App">
      <SearchTasks handleSearchText={setSearchText} />
      <Actions handleActionText={setActionText} />
      <TaskList
        tasks={tasksToShow.filter((task) =>
          task.title.toLowerCase().includes(searchText.toLowerCase())
        )}
      />
      <AddTasks />
    </div>
  );
}

export default App;
