import React, { useState } from "react";
import "./../styles/App.css";
import Task from "./Task";

function App() {
	const [text,setText] = useState('');
	const [tasklist,setTasklist] = useState([]);

	const addTask = ()=> {
		if(!text) return;
		let newtask = {id:Date.now(),text}
		setTasklist([...tasklist,newtask])
		setText('');
	}
	const deleteTask = (id)=> {
		let newList = tasklist.filter(task=>task.id !== id);
		setTasklist(newList);
	}
	const editTask = (id,text)=> {
		const newList = [...tasklist];
		let task = newList.find(task=>task.id===id);
		task.text = text;
		setTasklist(newList);
	}

	return (
	<div id="main">
		<textarea id="task" cols="30" rows="10" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
		<br />
		<button id="btn" onClick={addTask}>Add Task</button>
		<ul>
			{tasklist.map(task=>(<Task task={task} key={task.id} editTask={editTask} deleteTask={deleteTask}/>))}
		</ul>
	</div>
	);
}


export default App;
