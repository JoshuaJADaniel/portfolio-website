import imgSearch from "images/icons/search.svg";
import imgMic from "images/icons/microphone.svg";
import styles from "./Search.module.scss";

const Search = () => (
  <div className={styles.container}>
    <input readOnly value="Joshua Daniel" className={styles.inputField} />
    <img alt="Microphone Icon" src={imgMic} className={styles.controlButton} />
    <img alt="Search Icon" src={imgSearch} className={styles.controlButton} />
  </div>
);

export default Search;
