interface IUserRequest {

  id:number,
  status:string,
  receiver_approval:null | boolean,
  products: number[],
  createdAt:string,
  receiver_id : number,
  product_id : number,
  exchanged_id:null | number,

  'productId.title':string
  'productId.gallery':string[],
}
export default IUserRequest;
