import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

export default function AddTasks() {
  const [text, settext] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (text) {
      dispatch(addTask({ name: text }));
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => settext(e.target.value)} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
