import {makeAutoObservable} from "mobx";
import {CountryInfo, getCountryByName} from "../api/apiService";
const _ = require("lodash");

class AutocomplitStore {
    mode: boolean = false
    value: string = ''
    clues: Array<CountryInfo> = []
    loading: boolean = false

    constructor () {
        makeAutoObservable(this);
    }

    changeMode = (current: boolean) => {
        this.mode = current;
    }

    changeValue = (text: string) => {
        this.value = text;
        this.clues = [];
        this.loading = true;
        this.handleSearchBounce(text);
    }

    getClues = (text: string) => {
        getCountryByName(text)
            .then((response) => {
                this.clues = [...response];
                this.loading = false;
            })
    }

    handleSearchBounce = _.debounce((text: string) => {
        if (text.length > 0) {
            this.getClues(text);
        } else {
            this.clues = [];
            this.loading = false;
        }
      }, 200);
}

export default new AutocomplitStore;