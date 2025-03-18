const { Schema, model } = require(`mongoose`);

const applicantSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    updatedAt: [{ type: Date }],
  }
);

module.exports = new model(`Applicant`, applicantSchema);
