class AdatMegjelenites{
    #adatok;
    #id;
    #divElem;
    #urlapAdat
    constructor(adatok, szuloElem, urlapAdat){
        this.#urlapAdat = urlapAdat;
        console.log(urlapAdat)
        this.#id = adatok.nev_id;
        this.#adatok = adatok
        this.#divElem = szuloElem
        this.#divElem.append(this.#kiiras())
    }

    #kiiras(){
        let txt = "";
        for (const key in this.#adatok) {
            switch (key) {
                case "nev":
                    console.log("nev") 
                    let nev = this.#adatok[key];
                    console.log(nev.length)
                    txt += `<div> <a class="kivalasztott" href="kivalasztott.html">${nev} </a></div>`;
                    break;
                case "szul_datum":
                    txt += `<div>  <h3> ${this.#adatok[key]}</h3></div>`;
                    break;
                default:
                    break;
            }
            console.log(key)
        }
        return txt;
    }


}
export default AdatMegjelenites;