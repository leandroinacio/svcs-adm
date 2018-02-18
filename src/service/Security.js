import axios from 'axios'

// Request login with username and password
function login (user) {
  return axios
    .post('api/v1/auth', user)
}

// Public services
export {
  login
}
