import { useRouteError } from "react-router-dom";
import wrong from "../assets/cutebutwrong.jpeg";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div style={{ textAlign: "center" }}>
      <img src={wrong} alt="error image" style={{ width: 200 }} />
      <p className="page-error">
        <span>error:</span> {error.message}
      </p>
    </div>
  );
};

export default SinglePageError;
