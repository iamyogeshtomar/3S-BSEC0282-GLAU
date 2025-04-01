const { Schema, model } = require(`mongoose`);

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  package: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  requirements: [
    {
      type: String,
      trim: true,
    },
  ],
  employmentType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Contract", "Internship", "Freelance"],
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
    default: "Work From Home!",
  },
  remote: {
    type: Boolean,
    default: false,
    // required: true,
  },
});

module.exports = new model(`Job`, jobSchema);
