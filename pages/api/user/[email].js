const createConnection = require("../../../src/dbConnection");
const User = require("../../../models/user");

async function manageUserByEmailId(req, res) {
  try {
    const email = req.query.email;
    await createConnection();
    const result = await methodHandler[req.method](email, req.body);
    res.json(result);
  } catch (err) {
    console.log(err)
    let statusCode = 500
    if(err.code === 11000) {
      statusCode = 409
    } else if(err.message.includes("Invalid scheme")){
      statusCode = 400
    }
    res.status(statusCode).json({ message: err.message, error: true })
  }
}

const methodHandler = {
  GET: async function (email) {
    const user = await User.findOne({ email: email });
    return user;
  },
  POST: async function (email, body) {
    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: email,
      dob: body.dob,
      accountType: body.accountType,
    });
    return result;
  },
  DELETE: async function (email) {
    await User.deleteOne({ email });
    return {
      message: `user with email id ${email} was deleted`,
    };
  },
  PUT: async function (email, body) {
    await User.updateOne(
      { email },
      {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        dob: body.dob,
        accountType: body.accountType,
      }
    );
    return {
      message: `user with id ${email} was updated`,
    };
  },
};

module.exports = manageUserByEmailId;
