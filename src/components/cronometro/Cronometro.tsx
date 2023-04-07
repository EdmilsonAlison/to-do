import Botao from "../botao";
import Relogio from "./relogio/Relogio";
import styles from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/Date";
import { ITarefa } from "../../types/iTarefa";
import { useState } from "react";

interface CronometroProps {
  selecionado?: ITarefa;
}

const Cronometro = ({ selecionado }: CronometroProps) => {
  console.log("conversao", tempoParaSegundos("01:01:01"));

  const [tempo, setTempo] = useState();

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio />
      </div>
      <Botao texto="Começar" />
    </div>
  );
};

export default Cronometro;
