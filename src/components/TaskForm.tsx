import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import style from "./TaskForm.module.css";

//Interface
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
}

const TaskForm = ({ btnText, taskList, setTaskList, task }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [dificulty, setDificulty] = useState<number>(0);

  useEffect(() => {
    if(task){
      setId(task.id)
      setTitle(task.title)
      setDificulty(task.dificulty)
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, dificulty };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDificulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDificulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={style.form}>
      <div className={style.input_container}>
        <label>Título: </label>
        <input
          name="title"
          type="text"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={style.input_container}>
        <label>Dificuldade: </label>
        <input
          name="dificulty"
          type="text"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={dificulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
