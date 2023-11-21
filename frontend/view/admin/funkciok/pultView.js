import InputElemDate from "../inputElemek/inputElemDate.js";
import InputElemKiiras from "../inputElemek/inputElemText.js";


class PultView {
    #adatok;
    #szuloElem;
    #adatJelolo = [];
    #adatHalmaz = [];
    constructor(adatok, szuloElem) {
        this.#adatok = adatok
        this.#szuloElem = szuloElem;
        this.#hozzaAdPult_kiiras();
        const gomb = $(".elem_add");
        gomb.on("click", () => {
            this.#esemenyTrigger();
        })




    }

    #hozzaAdPult_kiiras() {
        let index = 0;
        for (const key in this.#adatok) {
            console.log(key);
            this.#szuloElem.append("<div></div>");
            this.#szuloElem.append(`<label for="${key}">${this.#adatok[key].megjelenes}</label>`);
            switch (this.#adatok[key].tipus) {
                case "text":
                    console.log(this.#adatok)
                    this.#adatJelolo[index] = new InputElemKiiras(this.#adatok[key], key, this.#szuloElem, "");
                    index = index + 1;
                    break;
                case "date":
                    this.#adatJelolo[index] = new InputElemDate(this.#adatok[key], key, this.#szuloElem, "");
                    index = index + 1;
                    break;
            }

        }
        this.#szuloElem.append(`<div><button class="elem_add">Hozzáadás</button></div>`);
    }

    #esemenyTrigger() {
        this.#setElemek()
        window.dispatchEvent(new CustomEvent("elem_add", { detail: this.#adatHalmaz }));
    }



    #getNev() {
        return this.#adatJelolo[0].getValue();
    }
    #getDatum() {
        return this.#adatJelolo[1].getValue();
    }

    #setElemek(){
        this.#adatHalmaz = { nev: `${this.#getNev()}`, szul_datum : `${this.#getDatum()}`}

    }

}
export default PultView;