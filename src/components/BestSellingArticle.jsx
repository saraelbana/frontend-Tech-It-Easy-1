import './BestSellingArticle.css';
import {getTVBrandTypeName, getTVPrice, getScreenSize} from "../helpers/inventorycalculations.js";
import SellingOverviewArticle from "./SellingOverviewArticle.jsx";


function BestSellingArticle(TV){
    return(
        <article>
            <div>

            </div>
            <h3>
                {getTVBrandTypeName(TV)}
            </h3>
            <p>
                {getTVPrice(TV)}
            </p>
            <p>
                {getScreenSize(TV)}
            </p>
        </article>
    );
}