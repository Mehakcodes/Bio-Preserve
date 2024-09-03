import axios from "axios";
import { useContext } from "react"
import { UserContext } from "../context/UserContext";
import { navigate } from "react-router-dom";



const Logout = async () => {
    const { setIsLogged, setUserId } = useContext(UserContext);

    setIsLogged(false);
    setUserId(null);
    // await axios.get("/api/auth/signout");
    navigate("/");
    return null;

}