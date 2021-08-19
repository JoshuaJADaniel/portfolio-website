import styles from "./Chip.module.scss";

interface ChipProps {
  text: string;
}

const Chip = ({ text }: ChipProps) => <div className={styles.chip}>{text}</div>;

export default Chip;
