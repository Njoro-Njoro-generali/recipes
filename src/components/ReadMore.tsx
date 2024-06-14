import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { GiCoffeeBeans } from "react-icons/gi";
import "./ReadMore.css";

interface ReadMoreProps {
  name: String;
  ingredients: String[];
  recipe: String;
  image: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({
  name,
  ingredients,
  recipe,
  image,
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
    <div className="read-more" id={`${name}`}>
      <div className="image-side">
        <img src={image} alt={`A Photo of a cup of ${name} coffee`} />
      </div>
      <div className="recipe-side">
        <div className="heading">
          <h1>
            {" "}
            <GiCoffeeBeans /> {name}
          </h1>
        </div>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((each) => (
              <li>{each}.</li>
            ))}
          </ul>
        </div>
        <div className="recipe">
          <h3>Recipe</h3>
          <ul>
            {recipe.split(". ").map((line) => (
              <li>{line}.</li>
            ))}
          </ul>
        </div>
        <a
          href={`https://www.youtube.com/results?search_query=how+to+cook+${name}+coffee`}
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
    </div>
  );
};

export default ReadMore;
