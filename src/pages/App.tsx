import Cronometro from "../components/cronometro/Cronometro";
import Formulario from "../components/formulario/Formulario";
import Lista from "../components/lista/Lista";
import { ITarefa } from "../types/iTarefa";
import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  const [selecionado, setSelecionado] = useState<ITarefa>();

  const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  };

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
