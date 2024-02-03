const mongoose = require("mongoose")
const validator = require("validator")

const Payement = mongoose.model('Payements', {
    libelle: {
      type: String,
      required: true,
    },
    montant : {
          type : Number,
          required : true,
          validate: {
            validator: (v) => v >= 0,
            message: "Le montant doit être positif",
          },
    }
  });

  module.exports = {
    Payement
  }