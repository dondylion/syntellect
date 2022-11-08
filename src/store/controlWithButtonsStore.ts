import {makeAutoObservable} from "mobx";

class ControlWithButtonsStore {
    mode: boolean = false;

    constructor () {
        makeAutoObservable(this);
    }

    changeMode = () => {
        this.mode = !this.mode;
    }
}

export default new ControlWithButtonsStore();