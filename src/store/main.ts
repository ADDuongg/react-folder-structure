import { makeAutoObservable } from "mobx";
import commonStore from "./commonStore";
import userStore from "./userStore";

class MainStore {
    commonStore: typeof commonStore;
    userStore: typeof userStore
    constructor(){
        this.commonStore = commonStore
        this.userStore = userStore

    }
}

const mainStore = new MainStore()
export default mainStore