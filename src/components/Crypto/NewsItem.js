import { motion } from "framer-motion";
import { useState } from "react";

const NewsItem = ({
  title,
  previewImg,
  preview,
  providerName,
  providerLogo,
}) => {
  const fallbackImage = "https://wallpaperaccess.com/full/173798.jpg";

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 0.9, rotateX: 360 , transition:{duration: 0.8}}}
      className="w-full h-full bg-white flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <button
          type="button"
          class="w-fit backdrop-blur-sm m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
        >
          Go To Article
        </button>
      )}
      {!isHovered && (
        <div className="w-full h-full bg-white p-6 flex flex-col">
          <div className="flex flex-row">
            <p className="text-xl font-bold mr-auto text-black pr-4">{title}</p>
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
      )}
    </motion.div>
  );
};

export default NewsItem;
