module.exports = (sequelize, DataTypes) => {
     const Product = sequelize.define('products', {
          id: {
               type: DataTypes.INTEGER,
               autoIncrement: true,
               primaryKey: true
          },
          category: {
               type: DataTypes.STRING,
               allowNull: true
          },
          type: {
               type: DataTypes.STRING,
               allowNull: true
          },
          product_name: {
               type: DataTypes.STRING,
               allowNull: true
          },
          description: {
               type: DataTypes.STRING,
               allowNull: true
          },
          price: {
               type: DataTypes.STRING,
               allowNull: true
          },
          price_int: {
               type: DataTypes.INTEGER,
               allowNull: true
          },
          image_1: {
               type: DataTypes.STRING,
               allowNull: true
          },
          image_2: {
               type: DataTypes.STRING,
               allowNull: true
          },
          image_3: {
               type: DataTypes.STRING,
               allowNull: true
          },
          image_4: {
               type: DataTypes.STRING,
               allowNull: true
          },
          promo: {
               type: DataTypes.STRING,
               allowNull: true
          }
     })
     return Product;
}