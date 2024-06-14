import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./RiceCard.css";

interface CardProps {
  name: string;
  ingredients: string[];
  recipe: string;
  image: string;
  background: string;
}

const RiceCard: React.FC<CardProps> = ({
  name,
  ingredients,
  recipe,
  image,
  background,
}) => {
  const [like, setLike] = useState("white");
  const [fav, setFav] = useState("white");

  const liking = () => {
    if (like === "white") {
      setLike("red");
    } else {
      setLike("white");
    }
  };

  const favoring = () => {
    if (fav === "white") {
      setFav("yellow");
    } else {
      setFav("white");
    }
  };
  return (
    <div
      className="rice-card"
      id={`${name}`}
      style={{ backgroundColor: `${background}` }}
    >
      <div className="heading">
        <h1>{name}</h1>
      </div>
      <div className="info">
        <div className="one-side">
          <div className="image-side">
            <img src={image} alt={`A Plate of ${name} Rice`} />
          </div>
        </div>
        <div className="ingredients-side">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((each) => (
              <li>{each}.</li>
            ))}
          </ul>
        </div>
        <div className="recipe-side">
          <h3>Recipe</h3>
          <ul>
            {recipe.split(". ").map((line) => (
              <li>{line}.</li>
            ))}
          </ul>
        </div>
      </div>
      <a
        href={`https://www.youtube.com/results?search_query=how+to+cook+${name}`}
        target="blank"
      >
        <button>Watch Video</button>
      </a>
      <div className="section">
        <FaHeart
          className="like"
          style={{ color: `${like}` }}
          onClick={liking}
        />
        <FaStar
          className="favorite"
          style={{ color: `${fav}` }}
          onClick={favoring}
        />
        <input type="text" placeholder="Write a comment ...." />
        <FiSend className="send" />
      </div>
    </div>
  );
};

export default RiceCard;
