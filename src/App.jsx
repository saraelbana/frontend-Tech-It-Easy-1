import './App.css';
import {totalInStockProducts, totalSoldProducts, totalTVsCompanyPurchased} from "./helpers/inventorycalculations.js";
import SellingOverviewArticle from "./components/SellingOverviewArticle.jsx";
import HeadingTwo from "./components/HeadingTwo.jsx";
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
                  <div>
                  </div>
              </section>
          </main>
      </body>
  );
}
export default App
