import {makeAutoObservable} from "mobx";

class SecondControlValue {
    value: string = ''

    constructor() {
        makeAutoObservable(this);
    }

    changeValue = (text: string) => {
        this.value = text;
    }

    alertText = () => {
        alert(this.value);
    }

    alertNumber = () => {
        if (this.value.length > 0 && !!Number(this.value)) {
            alert(this.value);
        }
    }
}

export default new SecondControlValue();