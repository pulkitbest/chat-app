const users = []

//addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return {
            error: 'Username and Room are required'
        }
    }

    //Check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    //Validate username
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    //Store User
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removedUser = (id) => {
    const index = users.findIndex((user) => user.id===id)

    if(index!==-1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user)=>user.id===id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removedUser,
    getUser,
    getUsersInRoom
}

