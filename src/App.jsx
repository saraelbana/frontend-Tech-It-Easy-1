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
import BestSellingArticle from "./components/BestSellingArticle.jsx";
import HeadingTwo from "./components/HeadingTwo.jsx";
import {bestSellingTv} from "./constants/inventory.js";

function App() {
  return (
      <body>
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
                    <BestSellingArticle TV={bestSellingTv}/>
                  </div>
              </section>
          </main>
      </body>
  );
}
export default App
