/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

// console.log("users: ", users);

// console.log("todos: ", todos);

// Create an alert that lists all users, with their ids, names and what city they're from

for (const user of users){
    console.log(`The user of id ${user.id} named ${user.name} lives in ${user.address.city}`)
}

// Prompt the user for a user id

const givenUserId = Number(prompt(`Please enter a user ID between 1 and 10`))

// Display an alert with the username and all the todos titles that belong to that user 


let userInfo = null

for (const user of users) {
    if(user.id === givenUserId) {
        userInfo = user
    }
}

console.log(`We found the user: ${userInfo}`)

let userTodos = []

for (const todo of todos){
    if (todo.userId === givenUserId){
        userTodos.push({
            userName: userInfo,
            title: todo.title
        })
    }
}

console.log(userTodos)