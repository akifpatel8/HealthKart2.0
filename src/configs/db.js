const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://anurag:3ibCkV5mA3j1CVeY@cluster0.xbapz.mongodb.net/health?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
};
module.exports = connect;
