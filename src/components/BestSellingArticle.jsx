import './BestSellingArticle.css';
import {getTVBrandTypeName, getTVPrice, getScreenSize} from "../helpers/inventorycalculations.js";
import SellingOverviewArticle from "./SellingOverviewArticle.jsx";
import {bestSellingTv} from "../constants/inventory.js";


function BestSellingArticle({TV}){
    return(
        <article>
            <div>
                <img src={TV.sourceImg}/>
            </div>
            <div>
                <h3>
                    {getTVBrandTypeName(TV).brand + " " + getTVBrandTypeName(TV).type + " - " + getTVBrandTypeName(TV).Name}
                </h3>
                <p>
                    {getTVPrice(TV)}
                </p>
                <p>
                    {getScreenSize(TV)}
                </p>
            </div>
        </article>
    );
}

export default BestSellingArticle;