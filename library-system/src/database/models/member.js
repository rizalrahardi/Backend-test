'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Book, {
        through: models.Borrowing,
        foreignKey: 'MemberId',
        otherKey: 'BookId',
      });
    }
  }
  Member.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    penalty_status: DataTypes.BOOLEAN,
    penalty_start_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};