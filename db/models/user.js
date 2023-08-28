'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.task, { through: "task_user" });
    }
  }
  user.init({
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_link: DataTypes.STRING,
    additonal_info: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user',
    underscored: false,
    timestamps: false,
    freezeTableName: true // Prevent Sequelize from pluralizing table name
  });
  return user;
};