class InputElemDate {
    #key;
    #adatok;
    #inputElme;
    #value;
    constructor(adatok, key, szuloElem, adat) {
        this.#value = adat
        this.#adatok = adatok;
        this.#key = key;
        szuloElem.append(this.#inputElem_kiiras());
        this.#inputElme = $(`.${this.#key}`);
        this.#inputElme.on("change", () =>{
            this.#value = this.#inputElme.val();
        })


    }


    #inputElem_kiiras() {
        console.log(this.#adatok)
        let txt = "";
       txt = `<input type="${this.#adatok.tipus}" class="${this.#key}"   min="${this.#adatok.pattern.min}" max="${this.#adatok.pattern.max}" value='${this.#value}'>`
        return txt;
    }


    getValue(){
        return this.#value
    }



}
export default InputElemDate;