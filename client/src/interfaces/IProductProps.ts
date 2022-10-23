interface IProductProps {
  attributes: {
    title: string;
    description: string;
    is_available: boolean;
    type: string;
    user_id: number;
    'Category.name': string,
    createdAt: string

  }
}
export default IProductProps;
