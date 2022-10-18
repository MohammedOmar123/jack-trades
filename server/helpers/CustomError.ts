class CustomError extends Error {
  status = 404;

  constructor(statusCode:number, msg:string) {
    super();
    this.status = statusCode;
    this.message = msg;
  }
}
export default CustomError;
