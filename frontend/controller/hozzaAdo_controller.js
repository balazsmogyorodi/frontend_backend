import UrlapLeiro from "../model/urlapLeiro.js";
import PultView from "../view/HozzaAd/pultView.js";

class HozzaAdo_controller{

    constructor(){

        const urlapAdat = new UrlapLeiro();
        new PultView(urlapAdat.getAdatLeiras(), $(".adat_hozzaAd"))
        $(window).on("elem_add", (event)=>{
            const obj = event.detail;
            let nev = obj.getNev();
            let szuletesi_datum = obj.getDatum();
            console.log(nev);

        })


    }



}
export default HozzaAdo_controller;