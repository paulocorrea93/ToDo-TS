import React, { useState } from "react";

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";

//CSS
import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

//Interface
import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShow = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShow(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, dificulty: number) => {
    const updateTask: ITask = { id, title, dificulty };

    const updateItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });

    setTaskList(updateItems);

    hideOrShow(false);
  };

  return (
    <div className="App">
      <Modal
        children={
          <TaskForm btnText="Editar" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />
        }
      />
      <Header />
      <div className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
