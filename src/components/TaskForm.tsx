import React from 'react'

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form>
        <div>
            <label>Título: </label>
            <input type="text" placeholder='Título da tarefa' />
        </div>
        <div>
            <label>Dificuldade: </label>
            <input type="text" placeholder='Dificuldade da tarefa' />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm