import React, { ChangeEvent, useState } from "react";
import style from "./TaskForm.module.css";

//Interface
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [dificulty, setDificulty] = useState<number>(0);

  const addTaskHandler = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDificulty(parseInt(e.target.value));
    }
    console.log(title);
    console.log(dificulty);
  };

  return (
    <form onSubmit={addTaskHandler} className={style.form}>
      <div className={style.input_container}>
        <label>Título: </label>
        <input
          type="text"
          placeholder="Título da tarefa"
          onChange={handleChange}
        />
      </div>
      <div className={style.input_container}>
        <label>Dificuldade: </label>
        <input
          type="text"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
