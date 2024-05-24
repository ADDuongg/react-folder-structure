import { makeAutoObservable } from "mobx";
import axios from "axios";
import jwt_decode, {JwtPayload} from "jwt-decode";
import { userType } from "../types/api/api";



class AuthStore {
    isLoggedIn = false;
    userInfo: userType | null = null;

    constructor(){
        makeAutoObservable(this);
        this.loadToken();
    }

    loadToken() {
        const token = localStorage.getItem("token");
        if (token) {
            this.isLoggedIn = true;
            
            this.userInfo = this.decodeToken(token);
        }
    }

    async login(username: string, password: string) {
        try {
            const response = await axios.post("/api/login", {
                username,
                password
            });

           
            localStorage.setItem("token", response.data.token);

            
            this.isLoggedIn = true;
            this.userInfo = this.decodeToken(response.data.token);

            return response.data;
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    logout() {
        localStorage.removeItem("token");
        this.isLoggedIn = false;
        this.userInfo = null;
    }

    private decodeToken(token: string): userType {
        const decoded: any = (jwt_decode as any)(token);
        return {
            id: decoded.id,
            username: decoded.username,
            email: decoded.email
        };
    }
}

const authStore = new AuthStore();
export default authStore;
