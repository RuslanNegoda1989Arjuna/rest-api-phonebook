const app = require('./app');
const PORT = 3108;


const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const {DB_HOST} = require("./config")

// const DB_HOST = "mongodb+srv://Arjuna:6xXXEQMhMqq1BXqV@cluster0.uaxuicn.mongodb.net/phoneBook?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`)
  }))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
});

// app.listen(PORT, () => {
//   console.log(`Server running. Use our API on port: ${PORT}`)
// });


// 6xXXEQMhMqq1BXqV

