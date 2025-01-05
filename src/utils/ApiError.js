class ApiError extends Error {
  constructor(
    statuscode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statuscode;
    this.data = null;
    this.errors = errors;
    this.message = message;
    this.success = false;
  }
}

export default ApiError;
