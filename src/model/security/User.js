export default class User {
  constructor (username, password) {
    this.username = username
    this.password = password
  }

  toString () {
    return '(' + this.username + ', ' + this.password + ')'
  }
}
