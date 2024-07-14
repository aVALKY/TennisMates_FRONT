import axios from "axios";

class ProfileService{
    static getAllProfile () {
        return axios.get("http://127.0.0.1:3000/Profiles", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
    }

    static getProfileById () {
        return axios.get("http://127.0.0.1:3000/Profiles/"+PR_ID, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
    }

}

export default ProfileService;