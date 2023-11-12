

export const adat = [
    { nev: "Lackffy János", szul: 1969 },
    { nev: "József Attila", szul: 1905 },
];


function today() {
    const d = new Date();
    let curr_date = d.getDate();
    let curr_month = d.getMonth() + 1;
    let curr_year = d.getFullYear();
    let txt = `${curr_year}.${curr_month}.${curr_date}`;
    console.log(txt);
    return txt;
}

/* 
export const tipus = { nev: "text", szul: "number" };
export const kulcs = { nev: "Név", szul: "Születési idő" };
export const pattern = { nev: "[A-Za-z]{3}", szul: { min: 1000, max: 2023 } }; */
export const adatLeiras = {
    nev: {
        megjelenes: "Személy neve",
        class: "nev",
        tipus: "text", 
        placeholder: "Valaki Vagyok",
        pattern: "[A-Z][a-z]{3}",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required: true,

    },

    szul: {
        megjelenes: "Születési idő",
        class: "datum",
        tipus: "date",
        value: "2000.01.01",
        pattern: { min: "1000.01.01", max: `${today()}` },
        szoveg: "1000 és 2023 közötti számot adhat meg!",

    },
};