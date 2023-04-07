import styles from "./Botao.module.scss";

interface BotaoProps {
  texto: string;
  type?: "button" | "submit" | "reset";
}

const Botao = ({ texto, type }: BotaoProps) => {
  return (
    <button type={type} className={styles.botao}>
      {texto}
    </button>
  );
};

export default Botao;
