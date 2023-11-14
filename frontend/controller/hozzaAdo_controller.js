import DataService from "../model/dataService.js";
import UrlapLeiro from "../model/urlapLeiro.js";
import PultView from "../view/HozzaAd/pultView.js";

class HozzaAdo_controller{

    constructor(){
        this.dataService = new DataService();
        const urlapAdat = new UrlapLeiro();
        new PultView(urlapAdat.getAdatLeiras(), $(".adat_hozzaAd"))
        $(window).on("elem_add", (event)=>{
            this.dataService.postData( "http://localhost:8000/api/writers", event.detail);

        })


    }



}
export default HozzaAdo_controller;