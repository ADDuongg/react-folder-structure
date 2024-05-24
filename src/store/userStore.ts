import { makeAutoObservable } from "mobx";
import axios from "axios";
import { userType } from "../types/api/api";

class UserStore {
    users: userType[] = [];

    constructor(){
        makeAutoObservable(this);
        this.loadUsers();
    }

    async loadUsers() {
        try {
            const response = await axios.get("/api/users");
            this.users = response.data;
        } catch (error) {
            console.error("Error loading users:", error);
        }
    }

    async post(endpoint: string, data: any) {
        try {
            const response = await axios.post(endpoint, data);
            return response.data;
        } catch (error) {
            console.error(`Error posting data to ${endpoint}:`, error);
            throw error;
        }
    }

    async get(endpoint: string) {
        try {
            const response = await axios.get(endpoint);
            return response.data;
        } catch (error) {
            console.error(`Error getting data from ${endpoint}:`, error);
            throw error;
        }
    }

    async put(endpoint: string, data: any) {
        try {
            const response = await axios.put(endpoint, data);
            return response.data;
        } catch (error) {
            console.error(`Error updating data at ${endpoint}:`, error);
            throw error;
        }
    }

    async delete(endpoint: string) {
        try {
            await axios.delete(endpoint);
        } catch (error) {
            console.error(`Error deleting data at ${endpoint}:`, error);
            throw error;
        }
    }
}

const userStore = new UserStore();
export default userStore;
