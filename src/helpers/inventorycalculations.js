import {inventory} from "../constants/inventory.js";

//opdracht 1a
const totalSoldProducts = () =>{
    let totalSoldProducts = 0;
    let totalOriginalStock = 0;
    for(let i =0; i<inventory.length;i++) {
        totalOriginalStock += inventory[i].originalStock;
        totalSoldProducts +=inventory[i].sold;
    }
    return totalOriginalStock - totalSoldProducts;
}