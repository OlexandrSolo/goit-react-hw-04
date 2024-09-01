import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

export default function Header({ submitForm }) {
  return (
    <header className={styles.header}>
      <SearchBar submitForm={submitForm} />
    </header>
  );
}
