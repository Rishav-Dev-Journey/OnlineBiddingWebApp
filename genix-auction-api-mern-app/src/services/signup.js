const User = require("../models/user");
const bcrypt = require("brycrpt");

async function createUser(userData) {
  const {name,email,password} = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = new User({
    name,
    email,
    hashedPassword
  });
  
  const savedUser = await createUser.save();
  return savedUser;
}

module.exports = {createUser };