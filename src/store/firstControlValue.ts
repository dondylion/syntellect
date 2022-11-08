import {makeAutoObservable} from "mobx";

class FirstControlValue {
    value: string = '';

    constructor () {
        makeAutoObservable(this);
    }

    changeValue = (text: string) => {
        this.value = text;
    }
}

export default new FirstControlValue();