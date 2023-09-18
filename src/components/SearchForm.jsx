import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form search-form">
      <input
        type="search"
        name="search"
        className="form-input search-form-input"
        defaultValue={searchTerm}
      />
      <button type="submit" className="btn search-btn" disabled={isSubmitting}>
        {isSubmitting ? "searching..." : "search"}
      </button>
    </Form>
  );
};

export default SearchForm;
