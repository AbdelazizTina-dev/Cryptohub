const NewsItem = () => {
  return (
    <div className="w-full bg-white p-6">
      <div className="flex flex-row">
        <p className="text-xl font-bold text-black">
          Crypto week at a glance: Bitcoin drops below $40,000 as crypto
          dominates Super Bowl
        </p>
        <img
          className="w-28 h-28"
          src="https://img.etimg.com/thumb/msid-89698955,width-1070,height-580,imgsize-168814,overlay-etmarkets/photo.jpg"
          alt="news"
        />
      </div>
      <p className="mt-2 text-justify">
        While this uncertainty plays out over the next few weeks, the news from
        around the world continued to be optimistic for the industry. We track
        key themes that played out last week: Crypto bowl hits US, installs grow
        300% This year’s Super Bowl ...
      </p>
      <div className="flex flex-row mt-4">
      <img
          className="w-6 h-6 mr-2"
          src="https://www.bing.com/th?id=ODF.nYADEgS75l8rdCg9D-p_OQ&pid=news"
          alt="news provider"
        />
        <p className="font-semibold mr-auto">YAHOO!News</p>
        <p className="text-gray-600">31 minutes ago</p>
      </div>
    </div>
  );
};

export default NewsItem;
