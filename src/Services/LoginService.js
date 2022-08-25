import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/users"
class LoginService {

    getUserById() {
        return axios.get(USER_API_BASE_URL);
    }
    user() {
        return axios.get(USER_API_BASE_URL);
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    updateUser(user, userId) {
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }



}


export default new LoginService()

