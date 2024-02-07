import {bestSellingTv, inventory} from "../constants/inventory.js";

//opdracht 1a
export const totalSoldProducts = () =>{
    let totalSoldProducts = 0;
    for(let i =0; i<inventory.length;i++) {
        totalSoldProducts +=inventory[i].sold;
    }
    return {title: "Aantal Verkocht ", number: totalSoldProducts};
}

//opdracht 1c
export const totalTVsCompanyPurchased = () =>{
    let totalOriginalStock = 0;
    for(let i =0; i<inventory.length;i++){
        totalOriginalStock += inventory[i].originalStock;
    }
    return {title: "Aantal ingekocht Producten", number: totalOriginalStock};
}

//opdracht 1e
export const totalInStockProducts = () =>{
    const totalProductsSold = totalSoldProducts().number;
    const totalOriginalStock = totalTVsCompanyPurchased().number;
    return {title:"Aantal te Verkopen Producten", number: totalOriginalStock - totalProductsSold};
}

//opdracht 2a
export const getTVBrandTypeName =(TV) =>{
    console.log(TV);

    return {brand: TV.brand, type: TV.type, Name:TV.name};
}

//opdracht 2b
export const getTVPrice = (TV) =>{
    return "€"+TV.price+",-";
}

//opdracht 2c
export const getScreenSize = (TV) =>{

   return TV.availableSizes.map((size) => `${size} inch (${convertInchToCm(size)} cm)`).join(" | ");
   //  let availableSizes = "";
   //  availableSizes = TV.availableSizes[0] + " inch (" + convertInchToCm(TV.availableSizes[0]) + " CM)";
   //  for(let i= 1; i<TV.availableSizes.length; i++){
   //      availableSizes += " | " + TV.availableSizes[i] + " inch (" + convertInchToCm(TV.availableSizes[i]) + " cm)";
   //  }
   //  return availableSizes;
}

function convertInchToCm(size){
    return Math.round(size * 2.54);
}
export function getTVOptionItemIcon(ApplicableTVOption){
    if(ApplicableTVOption === true)
        return "/src/assets/check.png";
    else
        return "/src/assets/minus.png";
}
export default getTVOptionItemIcon;

/*
From the Huiswerk begeleiden les a different approach to solve getScreenSizes function
* export function getScreenSize2(sizesArray){
* return sizesArray.map((size) =>{return '${size} inch (${Math.round(size*2.54)})cm'}).join("| ");}*/

//Deel 2 opdrachten
// 1a
const tvTypeNames = inventory.map(tv => tv.type);

