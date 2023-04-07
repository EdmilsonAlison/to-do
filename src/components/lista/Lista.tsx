import { ITarefa } from "../../types/iTarefa";
import styles from "./Lista.module.scss";
import Item from "./item/Item";

interface ListaProps {
  tarefas: ITarefa[];
  selecionaTarefa: (selecionatarefa: ITarefa) => void;
}

const Lista = ({ tarefas, selecionaTarefa }: ListaProps) => {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefas, index) => {
          return (
            <Item
              {...tarefas}
              key={tarefas.id}
              selecionaTarefa={selecionaTarefa}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default Lista;
