const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
    },
    age: {
      type: Number,
      required: [true, "Please add the age of the contact"],
    },
    phone: {
      type: String,
      required: [true, "Please add the phone number of the contact"],
    },
    address: {
      type: String,
      required: [true, "Please add the address of the contact"],
    },
    city: {
      type: String,
      required: [true, "Please add the city of the contact"],
    },
    postcode: {
      type: String,
      required: [true, "Please add the postcode of the contact"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dashboard_Contact", contactSchema);
