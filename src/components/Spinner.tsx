import * as React from 'react';

interface Props {
  isLoading: boolean;
}

const Spinner: React.FC<Props> = ({
  isLoading
}) => {
  if (!isLoading) return null;

  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;