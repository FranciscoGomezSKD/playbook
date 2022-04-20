const User = require('./../models/user')

class UserService {
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, "Sin bio"]
    }

    static updateUserUsername(user,name) {
        user.username = name
    }

    static getAllUsernames(users) {
        return [users[0].username, users[1].username, users[2].username]
    }
}

module.exports = UserService