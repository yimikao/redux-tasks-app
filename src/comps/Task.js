import React from "react";
import { toggleTask, deleteTask } from "../redux/taskSlice";
import { useDispatch } from "react-redux";

export default function Task({ task }) {
  const dispatch = useDispatch();

  function handleDelete(params) {
    dispatch(deleteTask({ id: task.id }));
  }

  function handleToggle() {
    dispatch(toggleTask({ id: task.id }));
  }

  return (
    <div
      style={{
        textDecoration: `${task.completed ? "line-through" : "none"}`,
        width: "30%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p>{task.title}</p>
      <small onClick={handleDelete}>delete</small>
      <small onClick={handleToggle}>complete</small>
    </div>
  );
}
