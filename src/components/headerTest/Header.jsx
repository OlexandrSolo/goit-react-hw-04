import SearchForm from "../searchForm/SearchForm";
import styles from "./Header.module.css";

export default function Header({ submitForm }) {
  return (
    <header className={styles.header}>
      <SearchForm submitForm={submitForm} />
    </header>
  );
}
