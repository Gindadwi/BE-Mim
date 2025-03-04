"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Spp", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_users: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE", // Perbarui userId jika kunci di users berubah
        onDelete: "CASCADE", // Hapus data jika user terkait dihapus
      },
      januari: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      februari: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      maret: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      april: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mei: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      juni: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      juli: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agustus: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      september: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      november: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      oktober: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      november: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desember: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Spp");
  },
};
