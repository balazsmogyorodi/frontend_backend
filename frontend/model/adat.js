export const adat = [
    { nev: "Lackffy János", szul: 1969 },
    { nev: "József Attila", szul: 1905 },
];
/* 
export const tipus = { nev: "text", szul: "number" };
export const kulcs = { nev: "Név", szul: "Születési idő" };
export const pattern = { nev: "[A-Za-z]{3}", szul: { min: 1000, max: 2023 } }; */
export const adatLeiras = {
    vnev: {
        megjelenes: "Vezetéknév",
        class: "vnev",
        tipus: "text",
        placeholder: "Valaki Vagyok",
        pattern: "[A-Z][a-z]{3}",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required: true,
       
    },
    knev: {
        megjelenes: "Keresztnév",
        class: "knev",
        tipus: "text",
        placeholder: "Valaki Vagyok",
        pattern: "[A-Z][a-z]{3}",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required: true,
    
    },
    szul: {
        megjelenes: "Születési idő",
        class: "datum",
        tipus: "number",
        value:"2000",
        pattern: { min: "1000", max: "2023" },
        szoveg: "1000 és 2023 közötti számot adhat meg!",
       
    },
};