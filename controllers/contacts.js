const { HttpError, ctrlWrapper } = require("../helpers");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts")

const getAll = async (req, res) => {
    res.json(await listContacts());
}

const getById = async (req, res) => {
    const { contactId } = req.params;
    const result = await getContactById(contactId);
     if (!result) {
         throw HttpError(404, "Not found 🛑 ");
    }
    res.json(result);
}

const add = async (req, res) => { 
    const result = await addContact(req.body);
    res.status(201).json(result);
}
const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not found 🛑 ");

  }
    res.status(202).json(result);
}

const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const result = await removeContact(contactId);
    if (!result) {
      throw HttpError(404, "Not found 🛑 ");
    }
    res.json({message: "Delete success 🦴"});
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById),
}