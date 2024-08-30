import { Field, Form, Formik } from "formik";

export default function SearchForm({ submitForm }) {
  const handleSubmitForm = (values, actions) => {
    submitForm(values.searchImg);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ searchImg: "" }} onSubmit={handleSubmitForm}>
      <Form autoComplete="off">
        <Field type="text" name="searchImg" placeholder="Search" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
