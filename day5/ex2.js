let user = {
    name: "username",
    age: "24",
}
Object.assign(user, {isActive: true})
user.age = "30"

console.log(user)