"use strict";

module.exports = (sequelize, DataTypes) => {
  const Spp = sequelize.define(
    "Spp",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_users: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users", // Sesuai nama tabel di migrasi
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      januari: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      februari: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maret: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      april: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mei: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      juni: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      juli: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agustus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      september: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      oktober: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      november: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desember: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "spp", // Menentukan nama tabel secara eksplisit
    }
  );

  Spp.associate = function (models) {
    Spp.belongsTo(models.User, {
      as: "User", // sesuai dengan relasi di User
      foreignKey: "id_users",
    });
  };

  return Spp;
};
