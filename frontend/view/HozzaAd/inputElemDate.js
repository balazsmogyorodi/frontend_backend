class InputElemDate {
    #key;
    #adatok;
    #inputElme;
    #value;
    constructor(adatok, key, szuloElem) {
        this.#adatok = adatok;
        this.#key = key;
        szuloElem.append(this.#inputElem_kiiras());
        this.#inputElme = $(`.${this.#key}`);
        this.#inputElme.on("change", () =>{
            this.#value = this.#inputElme.val();
        })


    }


    #inputElem_kiiras() {
        let txt = "";
       txt = `<label for="${this.#key}">${this.#adatok.megjelenes}</label>
       <input type="${this.#adatok.tipus}" class="${this.#key}"   min="${this.#adatok.pattern.min}" max="${this.#adatok.pattern.max}">`
        return txt;
    }


    getValue(){
        return this.#value
    }



}
export default InputElemDate;