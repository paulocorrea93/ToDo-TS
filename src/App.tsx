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

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div className="App">
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
          <TaskList taskList={taskList} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
