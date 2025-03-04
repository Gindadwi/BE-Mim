const { User, Spp } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const user = await User.findByPk(id, {
    attributes: ["id", "nama", "nisn"],
    include: [
      {
        model: Spp,
        as: "Spp",
        attributes: [
          "januari",
          "februari",
          "maret",
          "april",
          "mei",
          "juni",
          "juli",
          "agustus",
          "september",
          "oktober",
          "november",
          "desember",
        ],
      },
    ],
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  return res.json({
    status: "success",
    data: user,
  });
};
