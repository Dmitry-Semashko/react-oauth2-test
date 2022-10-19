import { useContext } from "react";
import { AuthContext } from "../Context/authContext";

export const useAuthApp = () => {
    return useContext(AuthContext);
};