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
    return "$"+TV.price+",-";
}

//opdracht 2c
export const getScreenSize = (TV) =>{
    let availableSizes = TV.availableSizes;
    for(let i= 0; i<availableSizes.length; i++){
        // availableSizes[i] +=
    }


    return TV.availableSizes.join("|");
}
function convertInchToCm(size){

}