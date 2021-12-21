import React, {useState} from "react";

function NewTaskForm({ categories }) {
  const [newTask, setNewTask] = useState('')
  const [newCategory, setNewCategory] = useState('')

  function handleNewCategory (e) {
    setNewCategory(e.target.value);
  }

  function handleNewTask (e) {
    setNewTask(e.target.value);
  }

  function onTaskFormSubmit (e) {
    e.preventDefault();

    const freshTask = {
      text: newTask,
      category: newCategory,
    }

    setTasks([...tasks, freshTask])

  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleNewTask}/>
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={handleNewCategory}>
          {categories.map((category) => {
            if (category !== "All") return <option>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
