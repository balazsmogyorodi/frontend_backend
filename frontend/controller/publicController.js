import DataService from "../model/dataService.js";
import UrlapLeiro from "../model/urlapLeiro.js";
import HibaView from "../view/hibaView.js";
import DataView from "../view/dataView.js";

class PublicController{

    constructor(){
        this.dataService = new DataService();
        this.dataService.getData(
            "http://localhost:8000/api/writers",
            this.megjelenit,
            this.megjelenitHiba
          );
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
        new DataView(lista, $(".adatok"), cimkek, urlapadat, "publikus");
        
      }
    
    
    
      megjelenitHiba(error) {
        console.log(error);
        new HibaView(error, $(".lista"));
      }


}
export default PublicController;