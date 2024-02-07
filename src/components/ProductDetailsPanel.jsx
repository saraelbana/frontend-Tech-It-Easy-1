import './ProductDetailsPanel.css';
import {getTVBrandTypeName, getTVPrice, getScreenSize} from "../helpers/inventorycalculations.js";
import SellingOverviewArticle from "./SellingOverviewArticle.jsx";
import {bestSellingTv} from "../constants/inventory.js";
import TVOptionItem from "./TVOptionItem.jsx";


function ProductDetailsPanel({TV}){
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
                <p>
                    <ul className="OptionsList">
                        {/*{TV.Options.map((option) => {*/}
                        {/*    for(let i = 0; i < TV.Options.length; i++){*/}
                        {/*        return <TVOptionItem TVOption={option}/>*/}
                        {/*    }*/}
                        {/*})}*/}
                        <TVOptionItem TVOption= {TV.options[0]}/>
                        <TVOptionItem TVOption= {TV.options[1]}/>
                        <TVOptionItem TVOption= {TV.options[2]}/>
                        <TVOptionItem TVOption= {TV.options[3]}/>
                        <TVOptionItem TVOption= {TV.options[4]}/>
                    </ul>
                </p>
            </div>
        </article>
    );
}

export default ProductDetailsPanel;