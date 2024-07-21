const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL = "mongodb://localhost:27017";

  mongoose
    .connect(connectionURL)
    .then(() => console.log("jon board database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
