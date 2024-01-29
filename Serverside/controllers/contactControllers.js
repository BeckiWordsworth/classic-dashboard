const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@desc GET /api/contacts
//@desc @access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create New contacts
//@desc POST /api/contacts
//@desc @access public

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, age, email, phone, address, city, postcode } = req.body;
  if (!name || !email || !phone || !age || !address || !city || !postcode) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({ name, email, phone, age, address, city, postcode });
  res.status(200).json(contact);
});

//@desc Get contact by ID
//@desc GET /api/contacts/:id
//@desc @access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contacts for ${req.params.id}` });
});

//@desc Update contact by ID
//@desc PUT /api/contacts/:id
//@desc @access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contacts for ${req.params.id}` });
});

//@desc Delete contact by ID
//@desc DEL /api/contacts/:id
//@desc @access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete a contact for ${req.params.id}` });
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
