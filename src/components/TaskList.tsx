import React from 'react'

//CSS
import style from './TaskList.module.css'

//Interface
import { ITask } from '../interfaces/Task'

interface Props {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit():void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((task) => (
        <div key={task.id} className={style.task}>
          <div className={style.details}>
          <h4>{task.title}</h4>
          <p>Dificuldade: {task.dificulty}</p>
          </div>
          <div className={style.actions}>
            <i className="bi bi-pencil" onClick={() => {handleEdit()}}></i>
            <i className="bi bi-trash" onClick={() => {handleDelete(task.id)}}></i>
          </div>
        </div>
      ))
    ):(
      <p>não tem tarefa cadastrada</p>
    )}
    </>
  )
}

export default TaskList