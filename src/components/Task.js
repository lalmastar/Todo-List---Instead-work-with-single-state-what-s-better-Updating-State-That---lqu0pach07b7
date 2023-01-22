import React, { useState } from 'react'

function Task({task,editTask,deleteTask}) {
  const [editMode,setEditMode] = useState(false);
  const [taskText,setTasktext] = useState(task.text);
  const saveTask = ()=> {
    if(!taskText) return;
    editTask(task.id,taskText);
    setEditMode(false);
  }

  return (
    <div className='list'>
        <li>{task.text}</li>
        <button className='edit' onClick={()=>setEditMode(true)}>edit</button>
        <button className='delete' onClick={()=>deleteTask(task.id)}>delete</button>
        <br />
        {editMode && <textarea className="editTask" cols="30" rows="5" value={taskText} onChange={(e)=>setTasktext(e.target.value)}></textarea>}
        {editMode && <button className='saveTask' onClick={saveTask}>Save Task</button>}
    </div>
  )
}

export default Task
