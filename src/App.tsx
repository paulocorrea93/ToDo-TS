import React from "react";

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";

//CSS
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.main}>
        <h3>Conteúdo</h3>
      </div>
      <Footer />
    </div>
  );
}

export default App;
