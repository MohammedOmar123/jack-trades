class CustomError extends Error {
  status: number;

  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

export default CustomError;
