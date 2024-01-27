const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@desc GET /api/contacts
//@desc @access public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
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
  res.status(200).json({ message: "Create contacts" });
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
