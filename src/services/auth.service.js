import axios from "axios";

const API_URL = "http://localhost:8081/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("firstName", response.data.firstName)
          localStorage.setItem("lastName", response.data.lastName)
          localStorage.setItem("Email", response.data.email)
          localStorage.setItem("Password", response.data.password)
          localStorage.setItem("id", response.data.id)
          localStorage.setItem("role", response.data.roles[0])
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, firstName, lastName, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      firstName,
      lastName,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
