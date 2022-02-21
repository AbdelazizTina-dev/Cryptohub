const NewsItem = ({
  title,
  previewImg,
  preview,
  providerName,
  providerLogo,
}) => {
  const fallbackImage = "https://wallpaperaccess.com/full/173798.jpg";

  return (
    <div className="w-full bg-white p-6 flex flex-col">
      <div className="flex flex-row">
        <p className="text-xl font-bold text-black pr-4">{title}</p>
        <img
          className="object-cover w-28 h-28"
          src={previewImg ? previewImg : fallbackImage}
          alt="news"
        />
      </div>
      <p className="mt-2 text-justify mb-auto">{preview}</p>
      <div className="flex flex-row mt-4">
        <img
          className="object-cover w-6 h-6 mr-2"
          src={providerLogo ? providerLogo : fallbackImage}
          alt="news provider"
        />
        <p className="font-semibold mr-auto">{providerName}</p>
        <p className="text-gray-600">31 mins ago</p>
      </div>
    </div>
  );
};

export default NewsItem;
