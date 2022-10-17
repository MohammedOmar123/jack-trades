export type Product = {
  title: string;
  description: string;
  gallery: string[];
  isAvailable: boolean;
  type: string;
  user_id: number;
  category_id: number;
};

export type User = {
  email: string,
  first_name: string,
  last_name: string,
  password: string,
  image: string,
  bio: string,
};

export type Category = {
  name: string,
  image: string,
};
