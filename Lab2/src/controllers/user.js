const db = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    // Save to DB
    // TODO check if user already exists
    // db.hmset(user.username, userObj, (err, res) => {
    //   if (err) return callback(err, null)
    //   callback(null, res) // Return callback
    // })
    db.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null)
      callback(null, res) // Return callback
    })
  },
  get: (username, callback) => {
    db.hget(username, "firstname", (err, res) => { 
      console.log(res);
      callback(null, res);
    })
  }
}
