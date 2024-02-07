import './App.css';
import {
    totalInStockProducts,
    totalSoldProducts,
    totalTVsCompanyPurchased,
    getTVBrandTypeName,
    getTVPrice,
    getScreenSize
} from "./helpers/inventorycalculations.js";
import SellingOverviewArticle from "./components/SellingOverviewArticle.jsx";
import ProductDetailsPanel from "./components/ProductDetailsPanel.jsx";
import HeadingTwo from "./components/HeadingTwo.jsx";
import {bestSellingTv} from "./constants/inventory.js";

function App() {
  return (

          <main>
              <section>
                  <h1>Tech IT easy dashboard</h1>
              </section>
              <section id="firstSection">
                <HeadingTwo titleName={"VerkoopOverzicht"}/>
                <div id="firstSectionDiv">
                    <SellingOverviewArticle cmdData={totalSoldProducts()} />
                    <SellingOverviewArticle cmdData={totalTVsCompanyPurchased()} />
                    <SellingOverviewArticle cmdData={totalInStockProducts()} />
                </div>
              </section>
              <section>
                  <HeadingTwo titleName={"Beste Verkochte TV"}/>
                  <div id="secondSectionDiv">
                    <ProductDetailsPanel TV={bestSellingTv}/>
                  </div>
              </section>
              <section>
                  <HeadingTwo titleName={"Alle TVs"}/>
              {/*    <div id="thirdSectionDiv">*/}
              {/*        <ProductDetailsPanel TV={getTVBrandTypeName("Samsung")}/>*/}
              {/*        <ProductDetailsPanel TV={getTVBrandTypeName("LG")}/>*/}
              {/*        <ProductDetailsPanel TV={getTVBrandTypeName("Sony")}/>*/}
              {/*      </div>*/}
              </section>
          </main>
  );
}
export default App
