import { ITarefa } from "../../../types/iTarefa";
import styles from "./Item.module.scss";

interface ItemProps extends ITarefa {
  selecionaTarefa: (selecionaTarefa: ITarefa) => void;
}

const Item = ({
  tarefa,
  tempo,
  id,
  completado,
  selecionado,
  selecionaTarefa,
}: ItemProps) => {
  return (
    <li
      className={`${styles.item} ${selecionado ? styles.itemSelecionado : ""} ${
        completado ? styles.itemCompletado : ""
      }`}
      onClick={() =>
        !completado &&
        selecionaTarefa({
          id,
          tarefa,
          tempo,
          selecionado,
          completado,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span> {tempo} </span>
      {completado && (
        <span className={styles.concluido} aria-label="tarefa completada">
          {" "}
        </span>
      )}
    </li>
  );
};

export default Item;
