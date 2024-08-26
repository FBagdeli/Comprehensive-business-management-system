export const ErrorMessage = ({ error }) => {
  return(
    <div className="error-message">
      {error && <p>{error}</p>}
    </div>
  )
};
