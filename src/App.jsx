import './App.css';
import {totalInStockProducts, totalSoldProducts, totalTVsCompanyPurchased} from "./helpers/inventorycalculations.js";
import SellingOverviewArticle from "./components/SellingOverviewArticle.jsx";
function App() {


  return (
      <main>
          <h1>Tech IT easy dashboard</h1>
          <section>
      <h2>
        VerkoopOverzicht
      </h2>
        <div>
            <SellingOverviewArticle cmdData={totalSoldProducts()} />
            <SellingOverviewArticle cmdData={totalTVsCompanyPurchased()} />
            <SellingOverviewArticle cmdData={totalInStockProducts()} />
        </div>
          </section>
          <section>
              <h2>
                  Beste Verkochte TV
              </h2>
              <div>

              </div>
          </section>
      </main>
  );
}
export default App
