const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

//Initialize the Comment table with id, content, user_id(id from user table), and post_id(id from post table)
Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id'
        }
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;