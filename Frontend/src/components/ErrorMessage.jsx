import React from 'react';

const ErrorMessage = ({ error }) => error ? <p className="error">{error}</p> : null;

export default ErrorMessage;
