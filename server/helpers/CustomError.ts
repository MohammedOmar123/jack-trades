class CustomError extends Error {
  status:number;

  constructor(statusCode:number, msg:string) {
    super();
    this.status = statusCode;
    this.message = msg;
  }
}
export default CustomError;
