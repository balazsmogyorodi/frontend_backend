import AdatTablaResz from "./adatTablaResz.js"

class DataView{
    #tableElem
    #cimElem
    #cimkek
    #lista
    #urlapAdat
    constructor(lista, szuloElem, cimkek, urlapAdat){
        this.#urlapAdat = urlapAdat;
        this.#lista = lista
        this.#cimkek = cimkek;
        this.#cimkek.push("Modósítás", "Törlés");
        szuloElem.append("<table>");
        this.#tableElem = szuloElem.children("table");
        this.#tableElem.append("<thead><tr></tr></thead>");
        this.#tableCimkek(this.#tableElem);
        this.#init();



        
    }

    #init(){
        this.#tableElem.append("<tbody>");
        for (let index = 0; index < this.#lista.length; index++) {
            new AdatTablaResz(index, this.#lista[index], this.#tableElem.children("tbody"), this.#urlapAdat);
        }

    }


    #tableCimkek(){
       
        this.#cimElem = this.#tableElem.children("thead").children("tr");
        console.log(this.#cimElem);
        let txt = "";
        for (let index = 0; index < this.#cimkek.length; index++) {
            txt += `<td>${this.#cimkek[index]}</td>`;
        }
        this.#cimElem.append(txt);
    }


}
export default DataView;