
import HibaView from "../view/hibaView.js";
import DataView from "../view/dataView.js";
import UrlapLeiro from "../model/urlapLeiro.js";
import DataService from "../model/dataService.js";
import Pultview from "../view/admin/funkciok/pultView.js";
import AdatTablaModosit from "../view/admin/funkciok/adatTablaModosit.js";
import AdatTablaResz from "../view/admin/funkciok/adatTablaResz.js";





class DataController {
  #adatok = [];
  #urlapAdat;
  constructor() {
    this.dataService = new DataService();
    this.#hozzad();
    this.dataService.getData(
      "http://localhost:8000/api/writers",
      this.megjelenit,
      this.megjelenitHiba
    );
    $(window).on("torles", (event) => {
      console.log(event.detail);
      this.dataService.deleteData("http://localhost:8000/api/writers", event.detail);
    });
    $(window).on("modosit", (event) => {
      const obj = event.detail;
      const urlapElem = obj.getUrlapElem();
      const tableElem = obj.getTrElem();
      console.log(tableElem);
      console.log(urlapElem);
      new AdatTablaModosit(obj.getAdatok(), tableElem, urlapElem);
    });

    $(window).on("megse", (event) => {
      const obj = event.detail;
      new AdatTablaResz(obj.getAdatok(), obj.getSzuloElem(), obj.getUrlapLeiro());
    })

  }

  megjelenit(lista) {
    console.log(lista);
    const cimkek = [];
    const urlapadat = new UrlapLeiro();
    urlapadat.setAdatok(lista);
    // this.#adatok = urlapadat.getAdatLeiras();
    console.log(urlapadat.getAdatLeiras());
    for (const key in urlapadat.getAdatLeiras()) {
      console.log(urlapadat.getAdatLeiras()[key].megjelenes);
      cimkek.push(urlapadat.getAdatLeiras()[key].megjelenes);
    }
    console.log(cimkek);
    new DataView(lista, $(".lista"), cimkek, urlapadat);
  }



  megjelenitHiba(error) {
    console.log(error);
    new HibaView(error, $(".lista"));
  }


  #hozzad() {
    this.dataService = new DataService();
    const urlapAdat = new UrlapLeiro();
    new Pultview(urlapAdat.getAdatLeiras(), $(".adat_hozzaAd"))
    $(window).on("elem_add", (event) => {
      this.dataService.postData("http://localhost:8000/api/writers", event.detail);
    })


  }
}
export default DataController;