const mongoose = require("mongoose");

const ContenirSchema = new mongoose.Schema({
    mnt1: {
        type: Number,
        required: true,
        default: 0,
        validate: {
            validator: (v) => v >= 0,
            message: "Le solde doit etre superieur à 0",
        },
    },
    mnt2: {
        type: Number,
        default: 0,
        validate: {
            validator: (v) => v >= 0,
            message: "Le solde doit etre superieur à 0",
        },
    },
    mnt3: {
        type: Number,
        default: 0,
        validate: {
            validator: (v) => v >= 0,
            message: "Le solde doit etre superieur à 0",
        },
    },
    fraisReins: {
        type: Number,
        required: true,
        default: 0,
        validate: {
            validator: (v) => v >= 0,
            message: "Le solde doit etre superieur à 0",
        },
    },
    departementId: { type: mongoose.Schema.Types.ObjectId, ref: 'Departement' },
    licencesId: { type: mongoose.Schema.Types.ObjectId, ref: 'Licences' },
});

// Create a compound unique index
ContenirSchema.index({ departementId: 1, licencesId: 1 }, { unique: true });

const Contenir = mongoose.model('Contenir', ContenirSchema);

module.exports = {
    Contenir
};
