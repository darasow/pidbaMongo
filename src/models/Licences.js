const mongoose = require("mongoose")
const validator = require("validator")

const Licences = mongoose.model('Licences', {
    libelle: {
      type: Number,
      required: true,
      validate: {
        validator: (v) => v > 0 && v < 5,
        message: "Le niveau doit être compris entre 1-4",
      },
    }
  });

  module.exports = {
    Licences
  }