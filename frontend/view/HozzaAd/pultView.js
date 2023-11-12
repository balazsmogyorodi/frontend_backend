import InputElemDate from "./inputElemDate.js";
import InputElemKiiras from "./inputElemText.js";


class PultView {
    #adatok;
    #szuloElem;
    #adatJelolo = [];
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
            this.#szuloElem.append("<div></div>");
            switch (this.#adatok[key].tipus) {
                case "text":
                    this.#adatJelolo[index] = new InputElemKiiras(this.#adatok[key], key, this.#szuloElem);
                    index = index + 1;
                    break;
                case "date":
                    this.#adatJelolo[index] = new InputElemDate(this.#adatok[key], key, this.#szuloElem);
                    index = index + 1;
                    break;
            }

        }
        this.#szuloElem.append(`<div><button class="elem_add">Hozzáadás</button></div>`);
    }

    #esemenyTrigger() {
        window.dispatchEvent(new CustomEvent("elem_add", { detail: this }));
    }



    getNev() {
        return this.#adatJelolo[0].getValue();
    }
    getDatum() {
        return this.#adatJelolo[1].getValue();
    }

}
export default PultView;