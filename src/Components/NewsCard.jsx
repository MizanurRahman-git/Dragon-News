import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, image_url, details, tags } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
  return (
    <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Author Info */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-gray-500 text-sm">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
                <CiBookmark size={30}/>
                <CiShare2 size={30}/>
        </div>
      </div>

      {/* title */}
      <h2 className="font-bold text-xl p-4">{title}</h2>

      {/* Content */}
      <div className="p-4 ">
        <img src={image_url} alt={title} className="w-full h-100 object-cover mb-5 rounded-xl" />
        <p className="text-gray-700 text-sm line-clamp-4">{details}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer: Rating & Views */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: rating.number }).map((_, idx) => (
              <FaStar key={idx} />
            ))}
            <span className="text-gray-800 ml-2">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
