import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const categories = CATEGORIES
  const [tasks, setTasks] = useState(TASKS)
  const [selected, setSelected] = useState('All')
  // const [newTask, setNewTask] = useState('')
  // const [newCategory, setNewCategory] = useState('')

  // function onTaskFormSubmit (e) {
  //   e.preventDefault();

  //   const freshTask = {
  //     text: newTask,
  //     category: newCategory,
  //   }

  //   setTasks([...tasks, freshTask])

  // }

  // function handleNewCategory (e) {
  //   setNewCategory(e.target.value);
  // }

  // function handleNewTask (e) {
  //   setNewTask(e.target.value);
  // }

  function handleSelected (e) {
    setSelected(e.target.value);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selected={selected} handleSelected={handleSelected} />
      <NewTaskForm categories={categories} />
      <TaskList tasks = {tasks} selected = {selected} />
    </div>
  );
}

export default App;
