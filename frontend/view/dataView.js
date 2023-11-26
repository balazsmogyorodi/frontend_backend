import AdatTablaResz from "./admin/funkciok/adatTablaResz.js"
import AdatMegjelenites from "./public/adatMegjelenites.js"


class DataView {
    #elem
    #cimElem
    #cimkek
    #lista
    #urlapAdat
    constructor(lista, szuloElem, cimkek, urlapAdat, oldal) {
        this.#urlapAdat = urlapAdat;
        this.#lista = lista
        this.#cimkek = cimkek;
        switch (oldal) {
            case "admin":
                szuloElem.append("<table>");
                $("table").addClass("table")
                this.#elem = szuloElem.children("table");
                this.#elem.append("<thead><tr></tr></thead>");
                this.#cimkek.push("Modósítás", "Törlés");
                this.#tableCimkek(this.#elem);
                this.#adminInit();
                break;
            case "publikus":
                this.#elem = szuloElem;
                console.log(szuloElem);
                this.#publicInit();
                break;
        }






    }

    #adminInit() {
        this.#elem.append("<tbody>");
        const tbody = $("tbody");
        for (let index = 0; index < this.#lista.length; index++) {
            tbody.append("<tr>");
            const tr = tbody.children("tr:last-child");
              new AdatTablaResz(this.#lista[index], tr, this.#urlapAdat);
        }
    }

    #publicInit() {
        console.log(this.#elem)
        for (let index = 0; index < this.#lista.length; index++) {
            this.#elem.append("<div class='elem'>");
            const div = this.#elem.children(".elem:last-child");
            new AdatMegjelenites(this.#lista[index], div, this.#urlapAdat);
        } 
    }


    #tableCimkek() {
        this.#cimElem = this.#elem.children("thead").children("tr");
        console.log(this.#cimElem);
        let txt = "";
        for (let index = 0; index < this.#cimkek.length; index++) {
            txt += `<td>${this.#cimkek[index]}</td>`;
        }
        this.#cimElem.append(txt);
    }






}
export default DataView;