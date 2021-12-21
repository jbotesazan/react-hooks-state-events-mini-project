import React from "react";
import Task from "./Task";

function TaskList({ tasks, selected }) {

  function handleDelete (e) {
    e.target.parentNode.remove()
  }

    
  const tasksToDisplay = tasks.filter((task) => {
    if (selected === "All") return tasks;
    return (selected === task.category);
  })


  return (
    <div className="tasks">
      {tasksToDisplay.map((task) => (
        <Task key={Math.random()} text={task.text} category={task.category} handleDelete={handleDelete}/>
      ))} 
    </div>
  );
}

export default TaskList;
