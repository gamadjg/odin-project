function createUserExtended (name, age){
    return {
        name: name,
        age: age,
    }
}

let user = createUserExtended ('David', 30)
console.log(user.name)

function createUserShortened (name, age) {
    return {
        name, 
        age, 
    }
}

let shortenedUser = createUserShortened('Aaron', 21)
console.log(shortenedUser.name)