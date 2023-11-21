class InputElemKiiras {
    #key;
    #adatok;
    #inputElme;
    #value;
    constructor(adatok, key, szuloElem, adat) {
        this.#value = adat;
        this.#adatok = adatok;
        this.#key = key;
        szuloElem.append(this.#inputElem_kiiras());
        this.#inputElme = $(`.${this.#key}`);
        this.#inputElme.on("keyup", () =>{
            this.#value = this.#inputElme.val();
        })


    }


    #inputElem_kiiras() {
        let txt = "";
       txt = `<input type="${this.#adatok.tipus}" class="${this.#key}" placeholder="${this.#adatok.placeholder}" pattern="${this.#adatok.pattern}" value="${this.#value}">`
        return txt;
    }

    getValue(){
        return this.#value
    }



}
export default InputElemKiiras;