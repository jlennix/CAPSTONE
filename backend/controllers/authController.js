// create user data array
const userData = [
  {
    id: 0,
    email: "jlennix@hotmail.com",
    password: "badpassword"
  },
  {
    id: 1,
    email: "bill@bill.com",
    password: "sillybilly"
  },
  {
    id: 2,
    email: "bob@bob.com",
    password: "burgertime"
  },
]

const loginUser = (req, res) => {
  let email = req.body.email
  let password = req.body.password

  console.log('authcontroller-loginUser-email: ', email, "password: ", password)

  console.log('loginController.jsx - loginUser', req.body)

  //find the user from userData array by matching the email
  const foundUser = userData.find((user)=> user.email === email)
  console.log('loginController.jsx - foundUser result', foundUser)

  // if find found a user, then check the password
  if (foundUser) {
    if(foundUser.password === password) {
      // correct password
      res.status(200).json( {result: "success"})
    } else (
      // password bad
      res.status(401).json( {result: "Email or password incorrect"})
    )
  } else {
    //user not found
    res.status(404).json( {result: "Email or password not found"})
  }
  
}

module.exports = {
  loginUser
}