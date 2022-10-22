interface UserProduct {
  category_id: number,
  createdAt: string,
  description: string,
  gallery: string[],
  id: number,
  is_available: boolean,
  title:string,
  type: string,
  updatedAt: string,
  user_id: number
}

export default UserProduct;
