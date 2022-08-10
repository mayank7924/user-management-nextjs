const createConnection = require("../../src/dbConnection");
const User = require("../../models/user");

async function getUsers(req, res) {
  try {
    if (req.method !== "GET") {
      res.status(500).json({
        error: "method is not supported",
      });
    }
    await createConnection();
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message, error: true });
  }
}

module.exports = getUsers;
