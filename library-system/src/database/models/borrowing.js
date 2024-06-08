'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrowing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Member, {
        foreignKey: 'MemberId',
      })
      this.belongsTo(models.Book, {
        foreignKey: 'BookId',
      })
    }
}
Borrowing.init({
  borrowing_date: DataTypes.DATE,
  return_date: DataTypes.DATE,
  return_status: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'Borrowing',
});
return Borrowing;
};