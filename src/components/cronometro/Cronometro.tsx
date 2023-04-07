import Botao from "../botao";
import Relogio from "./relogio/Relogio";
import styles from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/Date";
import { ITarefa } from "../../types/iTarefa";
import { useEffect, useState } from "react";

interface CronometroProps {
  selecionado?: ITarefa;
  finalizarTarefa: () => void;
}

const Cronometro = ({ selecionado, finalizarTarefa }: CronometroProps) => {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  };

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro </p>
      <div className={styles.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao
        texto="Começar"
        onClick={() => {
          regressiva(tempo);
        }}
      />
    </div>
  );
};

export default Cronometro;
