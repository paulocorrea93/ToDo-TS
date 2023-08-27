import React from 'react'
import style from './TaskForm.module.css'

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form className={style.form}>
        <div className={style.input_container}>
            <label>Título: </label>
            <input type="text" placeholder='Título da tarefa' />
        </div>
        <div className={style.input_container}>
            <label>Dificuldade: </label>
            <input type="text" placeholder='Dificuldade da tarefa' />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm