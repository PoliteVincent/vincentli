import { useRouteError } from "react-router-dom";

type CustomError = {
  status?: number;
  statusText?: string;
  message?: string;
};

const ErrorPage = () => {
  const error = useRouteError();

  // Type narrowing example: Check if the error has certain properties
  if (error instanceof Error) {
    // It's a generic JavaScript error
    return (
      <div>
        <h1>Error occurred</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (typeof error === "object" && error !== null) {
    const customError = error as CustomError;
    return (
      <div>
        <h1>{customError.status || "Error"}</h1>
        <p>{customError.statusText || "Something went wrong"}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Unknown Error</h1>
    </div>
  );
};

export default ErrorPage;
