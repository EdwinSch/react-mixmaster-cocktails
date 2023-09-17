import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  // IF 404
  if (error.status === 404) {
    return (
      <div className="error-wrapper">
        <img src={errorImg} alt="not found" className="img-404" />
        <h3>page not found</h3>
        <Link to="/">Back to home</Link>
      </div>
    );
  }
  // ELSE - other error types

  return (
    <div className="error-wrapper">
      <h3>Ohh... something went wrong</h3>;
    </div>
  );
};

export default Error;
