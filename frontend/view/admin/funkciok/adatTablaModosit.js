import InputElemDate from "../inputElemek/inputElemDate.js";
import InputElemKiiras from "../inputElemek/inputElemText.js";

class AdatTablaModosit {
    #adatok;
    #szuloElem;
    #urlapLeiro;
    #uralpLeiroAlap;
    #value;
    #inputElem;
    #adatJelolo = [];
    constructor(adatok, szuloElem, urlapLeiro) {
        this.#uralpLeiroAlap = urlapLeiro;
        this.#adatok = adatok;
        this.#szuloElem = szuloElem;
        console.log(this.#szuloElem);
        this.#urlapLeiro = urlapLeiro.getAdatLeiras();
        this.#modositoPanel();
        const megse = $('.megse');
        const megerosit = $('.megerosit');
        megse.on("click", () =>{
            this.#szuloElem.empty();
            this.#megseTrigger()
        })
        megerosit.on("click", () =>{
            this.#megerositTrigger();
        })
        
    }

    #modositoPanel() {
        let index = 0;
        for (const key in this.#urlapLeiro) {
            this.#szuloElem.append("<td></td>")
            console.log(this.#adatok)
            switch (this.#urlapLeiro[key].tipus) {
                case "text":                  
                    this.#adatJelolo[index] = new InputElemKiiras(this.#urlapLeiro[key], key, this.#szuloElem.children('td:last-child'), this.#adatok.nev);
                    break;
                case "date":
                    this.#adatJelolo[index] = new InputElemDate(this.#urlapLeiro[key], key, this.#szuloElem.children('td:last-child'));
                    break;
                default:
                    break;
            }
            index++;
        }
       let txt = `<td><button class="megerosit">Megerősités</button></td>
                <td><button class="megse">Mégse</button></td>`;
        this.#szuloElem.append(txt);
    }

    getAdatok(){
        return this.#adatok;
    }

    getUrlapLeiro(){
        return this.#uralpLeiroAlap;
    }

    getSzuloElem(){
        return this.#szuloElem;
    }

    #megseTrigger(){
        window.dispatchEvent(new CustomEvent("megse", { detail: this }));
    }

    #megerositTrigger(){
        window.dispatchEvent(new CustomEvent("megerosit", { detail: this }));
    }

    getNev() {
        return this.#adatJelolo[0].getValue();
    }
    getDatum() {
        return this.#adatJelolo[1].getValue();
    }


}
export default AdatTablaModosit;