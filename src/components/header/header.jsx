import SearchForm from "../searchForm/searchForm";

export default function Header({ submitForm }) {
  return (
    <header>
      <SearchForm submitForm={submitForm} />
    </header>
  );
}
