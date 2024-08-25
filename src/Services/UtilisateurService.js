import axios from "axios";

class UtilisateurService {
    static getAllUtilisateur () {
        const token = localStorage.getItem('token');
        return axios.get("http://127.0.0.1:3000/utilisateurs/", {
            headers : {
                Authorization : "Bearer " + token 
            }
        })
        
    }

    static getUtilisateurById (UT_ID) {
        const token = localStorage.getItem('token')
        return axios.get("http://127.0.0.1:3000/utilisateurs/"+UT_ID , {
            headers : {
                Authorization : "Bearer " + token 
            }
        });
    }
}


export default UtilisateurService;