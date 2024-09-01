import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { FcSearch } from "react-icons/fc";
import styles from "./SearchBar.module.css";

export default function SearchBar({ submitForm }) {
  const handleSubmitForm = (values, actions) => {
    if (values.searchImg.trim() === "") {
      return toast("What? You must entered text", {
        icon: "🔎",
      });
    }
    submitForm(values.searchImg);
    actions.resetForm();
  };
  return (
    <>
      <Formik initialValues={{ searchImg: "" }} onSubmit={handleSubmitForm}>
        <Form autoComplete="off">
          <FcSearch className={styles.searchIcon} />
          <Field
            className={styles.formField}
            type="text"
            name="searchImg"
            placeholder=" "
          />
        </Form>
      </Formik>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </>
  );
}
