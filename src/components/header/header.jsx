import SearchForm from "../SearchForm/SearchForm";
import styles from "../Header/Header.module.css";

export default function Header({ submitForm }) {
  return (
    <header className={styles.header}>
      <SearchForm submitForm={submitForm} />
    </header>
  );
}
