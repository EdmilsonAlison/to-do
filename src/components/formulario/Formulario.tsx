import { ITarefa } from "../../types/iTarefa";
import Botao from "../botao";
import styles from "./Formulario.module.scss";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) => {
  const [tarefa, setTarefa] = useState({
    tarefa: "",
    tempo: "00:00",
    selecionado: false,
    completado: false,
    id: uuidv4(),
  });

  const adicionartarefas = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [...tarefasAntigas, tarefa]);
    setTarefa({
      tarefa: "",
      tempo: "00:00",
      completado: false,
      selecionado: false,
      id: "",
    });
  };

  return (
    <form onSubmit={adicionartarefas} className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          placeholder="O que você quer estudar?"
          value={tarefa.tarefa}
          onChange={(evento) => {
            setTarefa({ ...tarefa, tarefa: evento.target.value });
          }}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          name="tempo"
          value={tarefa.tempo}
          onChange={(evento) => {
            setTarefa({ ...tarefa, tempo: evento.target.value });
          }}
          step="1"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao texto="Adicionar" type="submit" />
    </form>
  );
};

export default Formulario;
