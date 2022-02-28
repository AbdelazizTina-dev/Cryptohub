import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../components/Crypto/NewsItem";
import Dropdown from "../components/UI/Dropdown";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { fethcNews } from "../store/news-slice";

const News = () => {
  const news = useSelector((state) => state.news.data);
  const isFetching = useSelector((state) => state.news.isFetching);
  const coins = useSelector((state) => state.coins.data.coins);

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("Bitcoin");

  const getSelectedQuery = (query) => {
    setSearchQuery(query.value);
  };

  useEffect(() => {
    dispatch(fethcNews(searchQuery));
  }, [dispatch, searchQuery]);

  if (isFetching)
    return <LoadingSpinner/>


  const dropdownOptions = coins?.slice(0, 10).map((coin) => ({value: coin.name, label:coin.name}))

  return (
    <div>
      <Dropdown
        options={dropdownOptions}
        sendChangeToParent={getSelectedQuery}
      />
      <div className="grid grid-cols-3 gap-8">
        {news.map((n) => (
          <NewsItem
            key={n.name}
            title={n.name}
            url={n.url}
            previewImg={n.image?.contentUrl}
            preview={n.description}
            date={n.datePublished}
            providerName={n.provider[0]?.name}
            providerLogo={n.provider[0]?.image?.thumbnail?.contentUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
