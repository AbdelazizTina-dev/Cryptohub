import NewsItem from "../components/Crypto/NewsItem";

const News = () => {
    return (
        <div className="grid grid-cols-3 gap-8">
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
    );

}

export default News 