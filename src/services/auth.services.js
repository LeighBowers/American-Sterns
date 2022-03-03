import axios from "axios";
const API_URL = "https://american-sterns.herokuapp.com/users/";
class AuthService {
  async login(user) {
    console.log(user)
    console.log(API_URL + "signin")
    return axios
      .post(API_URL + "signin", {
        name: user.name,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    console.log(user)
    console.log(API_URL + "signup")

    return axios.post(API_URL + "signup", {
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }
}
export default new AuthService();