import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import "./Coffee.css";
import ReadMore from "./ReadMore";

interface CoffeeFormat {
  name: String;
  ingredients: String[];
  recipe: String;
  image: string;
}

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState<CoffeeFormat[]>([]);
  const [scrollLink, setScrollLink] = useState("");
  let names: string[];
  let searched: string;

  async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);

    if (!response) {
      throw new Error(`HTTP error Status:`);
    }

    const data = await response.json();
    return data;
  }

  (async () => {
    try {
      const jsonData = await fetchData("/coffee.json");
      setCoffeeData(jsonData);
      coffeeData.map((one) => names.push(`${one.name}`));
    } catch (error) {}
  })();

  useEffect(() => {
    const allDiv = document.querySelectorAll(".read-more");
    window.addEventListener("scroll", checkDiv);

    checkDiv();

    function checkDiv() {
      allDiv.forEach((divide) => {
        let toper = divide.getBoundingClientRect().top;
        if (toper == 0.8 * window.innerHeight) {
          divide.classList.add("show");
          alert("yes");
        }
      });
    }
  }, []);

  async () => {};

  const searchClicked = () => {
    const inputValue = document.getElementById("input");

    if (!inputValue?.textContent) {
      alert("Please input something to search");
      return;
    }

    searched = inputValue.textContent;

    names.map((oneName) => {
      if (oneName === searched) {
        setScrollLink(`${oneName}`);
        return;
      }
    });
  };

  return (
    <div className="coffee-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          pattern="[A-Za-z]*"
          id="input"
        />
        <a>
          <GoSearch className="click-search" onClick={searchClicked} />
        </a>
      </div>
      <div className="all-recipes">
        {coffeeData.map((Coffees) => (
          <ReadMore
            name={Coffees.name}
            ingredients={Coffees.ingredients}
            recipe={Coffees.recipe}
            image={Coffees.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CoffeeList;
