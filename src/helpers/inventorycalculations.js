import {inventory} from "../constants/inventory.js";

//opdracht 1a
export const totalSoldProducts = () =>{
    let totalSoldProducts = 0;
    for(let i =0; i<inventory.length;i++) {
        totalSoldProducts +=inventory[i].sold;
    }
    return totalSoldProducts;
}

//opdracht 1c
export const totalTVsCompanyPurchased = () =>{
    let totalOriginalStock = 0;
    for(let i =0; i<inventory.length;i++){
        totalOriginalStock += inventory[i].originalStock;
    }
    return totalOriginalStock;
}

//opdracht 1e
export const totalInStockProducts = () =>{
    let totalSoldProducts = 0;
    let totalOriginalStock = 0;
    for(let i =0; i<inventory.length;i++) {
        totalOriginalStock += inventory[i].originalStock;
        totalSoldProducts +=inventory[i].sold;
    }
    return totalOriginalStock - totalSoldProducts;
}