import axios from 'axios'

const USER_API_BASE_URL  = "http://localhost:8080/api/v1/register"

class UserService {

    registerUser(user){
        return axios.post(USER_API_BASE_URL, user)
    }

    loginUser(user){
        return axios.post("http://localhost:8080/login", user)
        .then(response => {
            console.log('user login  Authorization=> ' + response.headers['authorization'])
            localStorage.setItem('authorization', response.headers['authorization'])
            return response;
          })
          .catch(err => {
            console.log(err);
            throw err;
          });
    }

    logoutUser(){
        localStorage.removeItem("authorization");
    }

}

export default new UserService()