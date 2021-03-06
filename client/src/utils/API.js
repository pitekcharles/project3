import axios from "axios";

export default {
    getCharacters: function () {
        return axios.get("/api/characters");
    },
    addCharacter: function (characterData) {
        return axios.post("/api/characters", characterData);
    },
    getCharacter: function (id) {
        return axios.get("/api/characters/" + id);
    },
    deleteCharacter: function (id) {
        return axios.delete("/api/characters/" + id)
    },
    updateCharacter: function(id, characterData) {
        return axios.put("/api/characters/" + id, characterData)
    },


    login: function (loginInfo) {
        return axios.post("/api/users/login", loginInfo)
    },

    signup: function (signupInfo) {
        return axios.post("/auth/signup", signupInfo)
    },

    isLoggedIn: function () {
        return axios.get("/api/users/profile");
    },

    logout: function () {
        return axios.get("/api/users/logout")
    }

}
