import axios from "axios";

class UtilisateurService {
    static getAllUtilisateur () {
        return axios.get("http://127.0.0.1:3000/utilisateurs")
    }

    static getUtilisateurById (id) {
        return axios.get("http://127.0.0.1:3000/utilisateurs/"+id);
    }
}

export default UtilisateurService;