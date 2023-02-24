const Contact = require("../models/contact")
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
    res.json(await Contact.find());
}


// const getById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await getContactById(contactId);
//      if (!result) {
//          throw HttpError(404, "Not found 🛑 ");
//     }
//     res.json(result);
// }

const add = async (req, res) => { 
    const result = await Contact.create(req.body);
    res.status(201).json(result);
}
// const updateById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await updateContact(contactId, req.body);
//     if (!result) {
//       throw HttpError(404, "Not found 🛑 ");

//   }
//     res.status(202).json(result);
// }

// const deleteById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await removeContact(contactId);
//     if (!result) {
//       throw HttpError(404, "Not found 🛑 ");
//     }
//     res.json({message: "Delete success 🦴"});
// }

module.exports = {
    getAll: ctrlWrapper(getAll),
    // getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    // updateById: ctrlWrapper(updateById),
    // deleteById: ctrlWrapper(deleteById),
}