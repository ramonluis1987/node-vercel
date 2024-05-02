module.exports = (sequelize, DataTypes) => {
  const Point = sequelize.define(
    'Point',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      coordinate: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    { sequelize, timestamps: true }
  );

  return Point;
};
