import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
  return (
    <div>
      {tasks &&
        tasks.map((task, i) => {
          return <Task key={i} task={task} />;
        })}
    </div>
  );
}
