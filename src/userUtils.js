const fs = require('fs')

function fetchUsers() {
    const userList = JSON.parse(fs.readFileSync("C:/nextjs-starter/user-list.json"))
    return userList
}

function fetchUserById(id) {
    const userList = JSON.parse(fs.readFileSync("C:/nextjs-starter/user-list.json"))
    const result = userList.find(user => user.id === Number(id))
    return result
}

function createUser(userId, first_name, last_name) {
    const userList = JSON.parse(fs.readFileSync("C:/nextjs-starter/user-list.json"))
    const result = userList.find(user => user.id === Number(userId))
    if(result){
        throw new Error("User already exists")
    }    
    const newUser = {id: Number(userId), first_name, last_name}
    userList.push(newUser)
    fs.writeFileSync("C:/nextjs-starter/user-list.json", JSON.stringify(userList))
    return newUser
}

function deleteUserById(userId) {
    const userList = JSON.parse(fs.readFileSync("C:/nextjs-starter/user-list.json"))
    const result = userList.find(user => user.id === Number(userId))
    if(!result){
        throw new Error("User not found")
    } 
    const updatedList = userList.filter(user => user.id!==Number(userId))
    fs.writeFileSync("C:/nextjs-starter/user-list.json", JSON.stringify(updatedList))
}

function updateUserById(userId, first_name, last_name) {
    const userList = JSON.parse(fs.readFileSync("C:/nextjs-starter/user-list.json"))
    userList.forEach(user => {
        if(user.id === Number(userId)) {
            user.first_name = first_name
            user.last_name = last_name
        }
    })
    fs.writeFileSync("C:/nextjs-starter/user-list.json", JSON.stringify(userList))
}

module.exports = {
    fetchUsers: fetchUsers,
    fetchUserById: fetchUserById,
    createUser: createUser,
    deleteUserById: deleteUserById,
    updateUserById: updateUserById
}