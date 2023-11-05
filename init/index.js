const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
main()
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Error in connction to database");
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
const initDb = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "653dbe83d2d4756cb12633c5",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDb();
