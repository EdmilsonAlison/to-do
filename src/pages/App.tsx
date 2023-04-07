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

  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAntigas) =>
        tarefasAntigas.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  };

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
