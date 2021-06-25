import React from "react";
import { deleteAllTasks, deleteCompletedTasks } from "../redux/taskSlice";
import { useDispatch } from "react-redux";

export default function Actions({ handleActionText }) {
  const dispatch = useDispatch();

  function handleDeleteAllTasks(params) {
    dispatch(deleteAllTasks());
  }

  function handleDeleteCompletedTasks() {
    dispatch(deleteCompletedTasks());
  }

  return (
    <div>
      <button
        value="show-completed"
        onClick={(e) => handleActionText(e.target.value)}
      >
        Show completed
      </button>
      <button
        value="show-all"
        onClick={(e) => handleActionText(e.target.value)}
      >
        Show all
      </button>
      <button onClick={() => handleDeleteCompletedTasks()}>
        Delete completed
      </button>
      <button onClick={() => handleDeleteAllTasks()}>Delete all</button>
    </div>
  );
}
