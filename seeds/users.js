const mongoose = require("mongoose")
const username = "user"
const password = "grNCDXdInmw7JgDb"
const User = require("../models/user")

const seedUsers = async () => {
    try{
        await mongoose.connect(`mongodb://${username}:${password}@ac-rqul8uo-shard-00-00.92yvckq.mongodb.net:27017,ac-rqul8uo-shard-00-01.92yvckq.mongodb.net:27017,ac-rqul8uo-shard-00-02.92yvckq.mongodb.net:27017/user_management?ssl=true&replicaSet=atlas-jvfo1w-shard-0&authSource=admin&retryWrites=true&w=majority`)
        const result = await User.insertMany([
            {
                firstName: "John",
                lastName: "Doe",
                email: "john@xyz.com",
                dob: "2016-05-18T16:00:00Z",
                accountType: "Paid",
                lastActive: "2016-05-18T16:00:00Z"
            },
            {
                firstName: "Jane",
                lastName: "Doe",
                email: "jane@xyz.com",
                dob: "2016-05-18T16:00:00Z",
                accountType: "Paid",
                lastActive: "2016-05-18T16:00:00Z"
            },
            {
                firstName: "Michael",
                lastName: "Doe",
                email: "michael@xyz.com",
                dob: "2016-05-18T16:00:00Z",
                accountType: "Expired",
                lastActive: "2016-05-18T16:00:00Z"
            }
        ])
        console.log(result)
    } catch(err) {
        console.log(err)
    }
   
}
seedUsers()