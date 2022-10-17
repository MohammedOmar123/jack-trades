/* eslint-disable import/prefer-default-export */
import User from './users';
import Category from './Category';
import Product from './Product';
import Favorite from './favorites';
import Feedback from './feedback';
import Request from './requests';

// user relations
User.hasMany(Product, { foreignKey: 'user_id' });
Product.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Favorite, { foreignKey: 'user_id' });
Favorite.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Request, { foreignKey: 'sender_id' });
Request.belongsTo(User, { foreignKey: 'sender_id' });

User.hasMany(Request, { foreignKey: 'receiver_id' });
Request.belongsTo(User, { foreignKey: 'receiver_id' });

// product relations
Product.hasMany(Request, { foreignKey: 'product_id' });
Request.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasOne(Request, { foreignKey: 'exchanged_id' });
Request.belongsTo(Product, { foreignKey: 'exchanged_id' });

Product.hasMany(Favorite, { foreignKey: 'product_id' });
Favorite.belongsTo(Product, { foreignKey: 'product_id' });

// category relations
Category.hasMany(Product, { foreignKey: 'category_id', sourceKey: 'id' });
Product.belongsTo(Category, { foreignKey: 'category_id', targetKey: 'id' });

export {
  User,
  Category,
  Product,
  Favorite,
  Feedback,
  Request,
};
