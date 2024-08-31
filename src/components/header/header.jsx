import SearchForm from "../SearchForm/SearchForm";

export default function Header({ submitForm }) {
  return (
    <header>
      <SearchForm submitForm={submitForm} />
    </header>
  );
}
