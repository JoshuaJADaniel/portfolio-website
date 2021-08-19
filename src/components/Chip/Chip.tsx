import styles from "./Chip.module.scss";

interface ChipProps {
  text: string;
  className: string;
}

const Chip = ({ text, className, ...other }: ChipProps) => (
  <div className={`${styles.chip} ${className}`} {...other}>
    {text}
  </div>
);

export default Chip;
