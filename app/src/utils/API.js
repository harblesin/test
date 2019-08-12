import axios from "axios";

export default {
  loginUser: function(user) {
    return axios.post("/api/user", user);
  },

  logoutUser: function(user) {
    return axios.get("/api/user", user);
  },

  createUser: function(user) {
    return axios.get("/api/user", user);
  }
};
