import axios from "axios";

class UtilisateurService {
    static getAllUtilisateur () {
        return axios.get("http://127.0.0.1:3000/utilisateurs", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        
    }
}

export default UtilisateurService;