const app = require('./app');
const PORT = 3108;


const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const {DB_HOST} = process.env

// const DB_HOST = "mongodb+srv://Arjuna:6xXXEQMhMqq1BXqV@cluster0.uaxuicn.mongodb.net/phoneBook?retryWrites=true&w=majority";
// SECRET_KEY=&bY~|$E_>lEJ&^@v:Oa^JSz":>9f~<
mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`)
  }))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
});

// 6xXXEQMhMqq1BXqV

