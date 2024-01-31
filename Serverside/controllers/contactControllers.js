const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@desc GET /api/contacts
//@desc @access private

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Create New contacts
//@desc POST /api/contacts
//@desc @access private

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
//@desc @access private

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update contact by ID
//@desc PUT /api/contacts/:id
//@desc @access private

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedContact);
});

//@desc Delete contact by ID
//@desc DEL /api/contacts/:id
//@desc @access private

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.remove();
  res.status(200).json(contact);
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
