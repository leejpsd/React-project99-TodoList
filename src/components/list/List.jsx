import React from 'react';
import Form from '../form/Form';
import TodoItem from '../todo/Todo';
import "./list.css"

function List({todoList,onRemove,onToggle}) {
	const todoListWorking = todoList.filter(e => !e.isDone)
	const todoListDone = todoList.filter(e => e.isDone)
	return (
		<>
		<div className='list-container'>
				<h2 className="list-title" >Working.. 🔥</h2>
				<div className="list-wrapper">
						
						{todoListWorking.map((todo)=>{ 
								return <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
								})}
								
								
				</div>
				<h2 className="list-title" >Done..! 🎉</h2>
				<div className="list-wrapper">
		
				{todoListDone.map((todo)=>{ 
						return <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
						})}
						

				</div>
		</div>
		</>
		
)
}

export default List