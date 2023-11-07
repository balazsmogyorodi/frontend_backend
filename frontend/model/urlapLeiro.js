import { adatLeiras } from "./adat.js";

class UrlapLeiro{
    #adat
    #adatLeiras
    #adatok = []
   
    constructor() {
        this.#adatLeiras =  adatLeiras;
    }
    get adat() {
        return this.#adat;
    }
    getAdatLeiras() {
        return this.#adatLeiras;
    }

    set adat(adat){
        this.#adat = adat;
    }

    adatTroles(id){
        this.#adatok.splice(id, 1);
    }

    setAdatok(adatok){
        console.log(adatok)
        this.#adatok = adatok;
        console.log(this.#adatok)
    }

    getAdatok(){
        return this.#adatok;
    }


}
export default UrlapLeiro;