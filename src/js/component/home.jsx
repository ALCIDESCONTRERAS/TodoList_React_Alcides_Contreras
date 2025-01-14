import React, { useEffect, useState } from "react";


const Home = () => {
	const [todosList, setTodosList] = useState([]);
	const [task, setTask] = useState("");

	const addTask = () =>{
		if(task === "") return
		if(task.trim !== ""){
			setTodosList([...todosList, task])
			setTask("")}
	};

	console.log(task);
	

	const handleKeyPress = (event) =>{
		let keyDown;
		if(event.key === "Enter"){
			event.preventDefault()
			keyDown = addTask()
		}
		return keyDown
	};

	const deleteTask = (index) =>{
		const tareas = [...todosList]
		tareas.splice(index,1)
		setTodosList(tareas)
	};	

	useEffect(()=>{
		if(todosList.length >= 13){
			Swal.fire({
				title: "Quieres seguir Agregando Tarea",
				text: "Llevas 13 tareas agregadas",
				icon: "question"
			  });
		}
	}, [todosList])

	return (
		<>
			<main className="container"> 
				<header className="header">
					<h1>TODO LIST</h1>
				</header>
				<section className="input">
					<input type="text" className="input_task" value={task} onChange={e => setTask(e.target.value)} onKeyDown={handleKeyPress} placeholder="Add task"/>
				</section>
				<section>
					<ul className="list_Task">
						{todosList.map((todos, index ) => (
							<li key={index} className="add_Task">{todos} <span className="task_icon"><i onClick={()=>deleteTask(index)} className="fa-solid fa-trash"></i></span></li>
						))}
					</ul>
				</section>
			</main>
		</>	
	);
};

export default Home;
