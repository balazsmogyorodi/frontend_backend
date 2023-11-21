class AdatTablaResz{
    #adatok;
    #id;
    #trElem;
    #urlapAdat
    constructor(adatok, szuloElem, urlapAdat){
        this.#urlapAdat = urlapAdat;
        console.log(urlapAdat)
        this.#id = adatok.nev_id;
        this.#adatok = adatok
        
        console.log(szuloElem);
        this.#trElem = szuloElem
        this.#trElem.attr('id', `${this.#id}`);
        this.#trElem.append(this.#kiiras())
        console.log(this.#id);
        $(`.torles${this.#id}`).on("click",()=>{
            this.#trElem.remove();
            this.#torlestrigger();
        })
        $(`.modosit${this.#id}`).on("click",()=>{
            this.#trElem.empty();
            this.#modositTrigger();
        })


    }

    getTrElem(){
        return this.#trElem;
    }
    getUrlapElem(){
        return this.#urlapAdat;
    }

    getId(){
        return this.#id
    }

    getAdatok(){
        return this.#adatok
    }





    #kiiras(){
        let txt = "";
        for (const key in this.#adatok) {
            switch (key) {
                case "nev":
                    console.log("nev") 
                    let nev = this.#adatok[key];
                    let index = 0;
                    console.log(nev.length)
                    txt += `<td>${nev}</td>`;
                    break;
                case "szul_datum":
                    txt += `<td>${this.#adatok[key]}</td>`;
                    break;
                default:
                    break;
            }
            console.log(key)
            
        }
        txt += `<td><button class="modosit${this.#id}" ">áttírás</button></td><td><button class="torles${this.#id}">törlés</button></td>`
        return txt;
    }
    #torlestrigger(){
        window.dispatchEvent(new CustomEvent("torles", {detail:this.#id}));
    }

    #modositTrigger(){
        window.dispatchEvent(new CustomEvent("modosit", {detail:this}));
    }

}
export default AdatTablaResz;