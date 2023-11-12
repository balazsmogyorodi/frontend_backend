class InputElemKiiras {
    #key;
    #adatok;
    #inputElme;
    #value;
    constructor(adatok, key, szuloElem) {
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
       txt = `<label for="${this.#key}">${this.#adatok.megjelenes}</label>
       <input type="${this.#adatok.tipus}" class="${this.#key}" placeholder="${this.#adatok.placeholder}" pattern="${this.#adatok.pattern}">`
        return txt;
    }

    getValue(){
        return this.#value
    }



}
export default InputElemKiiras;