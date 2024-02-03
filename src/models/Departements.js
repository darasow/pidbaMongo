const mongoose = require("mongoose")


const Departement = mongoose.model('Departements', {
    name: {
      type: String,
      required: true,
      unique : true,
    },
    licence: { type: mongoose.Schema.Types.ObjectId, ref: 'Licences' },
  });

  module.exports = {
    Departement
  }