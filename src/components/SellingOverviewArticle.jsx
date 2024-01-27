import './SellingOverviewArticle.css';
function SellingOverviewArticle({cmdData}) {
    return (
        <article>
            <h3>
                {cmdData.title}
            </h3>
            <p>
                {cmdData.number}
            </p>
        </article>
    );
}
export default SellingOverviewArticle;