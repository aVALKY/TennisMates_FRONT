import axios from "axios";

class ProfileService{
    static getAllProfile () {
        return axios.get("http://127.0.0.1:3000/Profiles")
    }

    static getProfileById (id) {
        return axios.get("http://127.0.0.1:3000/profiles/"+id);
    }
}

export default ProfileService;