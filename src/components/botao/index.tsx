import styles from "./Botao.module.scss";

interface BotaoProps {
  texto: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Botao = ({ texto, type, onClick }: BotaoProps) => {
  return (
    <button type={type} className={styles.botao} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Botao;
