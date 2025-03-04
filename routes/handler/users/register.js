const bcrypt = require("bcrypt");
const { User, Spp } = require("../../../models");
const validator = require("fastest-validator");
const v = new validator();

module.exports = async (req, res) => {
  // Skema validasi sesuai dengan model Users
  const schema = {
    nama: "string|empty:false",
    alamat: "string|empty:false",
    no_Hp: "string|empty:false",
    kelas: "string|empty:false",
    nisn: "string|empty:false|min:10|max:10",
    password: "string|min:6",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  try {
    // Cek apakah NISN sudah terdaftar
    const user = await User.findOne({
      where: { nisn: req.body.nisn },
    });

    if (user) {
      return res.status(409).json({
        status: "error",
        message: "NISN already exists",
      });
    }

    // Hash password
    const password = await bcrypt.hash(req.body.password, 10);

    // Persiapkan data untuk disimpan
    const data = {
      nama: req.body.nama,
      alamat: req.body.alamat,
      no_Hp: req.body.no_Hp,
      kelas: req.body.kelas,
      nisn: req.body.nisn,
      password,
    };

    // Simpan data user baru
    const createUser = await User.create(data);

    // Setelah user berhasil dibuat, buat data Spp
    const sppData = {
      id_users: createUser.id,
      januari: "Belum Bayar",
      februari: "Belum Bayar",
      maret: "Belum Bayar",
      april: "Belum Bayar",
      mei: "Belum Bayar",
      juni: "Belum Bayar",
      juli: "Belum Bayar",
      agustus: "Belum Bayar",
      september: "Belum Bayar",
      oktober: "Belum Bayar",
      november: "Belum Bayar",
      desember: "Belum Bayar",
    };

    await Spp.create(sppData);

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: {
        id: createUser.id,
        nama: createUser.nama,
        nisn: createUser.nisn,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
