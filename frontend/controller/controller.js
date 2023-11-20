
import HibaView from "../view/hibaView.js";
import DataView from "../view/adatMegjelenites/dataView.js";
import UrlapLeiro from "../model/urlapLeiro.js";
import DataService from "../model/dataService.js";
import Pultview from "../view/HozzaAd/pultView.js";





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


  #hozzad(){
    this.dataService = new DataService();
    const urlapAdat = new UrlapLeiro();
    new Pultview(urlapAdat.getAdatLeiras(), $(".adat_hozzaAd"))
    $(window).on("elem_add", (event)=>{
        this.dataService.postData( "http://localhost:8000/api/writers", event.detail);
    })


  }
}
export default DataController;