/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import "./Italy.css";
import RiceCard from "./RiceCard";

interface ItalyFormat {
  name: String;
  ingredients: String[];
  recipe: String;
  image: string;
}

const ItalianList = () => {
  const [italyData, setItalyData] = useState<ItalyFormat[]>([]);

  async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);

    // if (!response.ok) {
    //   throw new Error(`HTTP error status: ${response.status}`);
    // }

    const data = await response.json();
    return data;
  }

  (async () => {
    try {
      const jsonData = await fetchData("./italian.json");
      setItalyData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  })();

  return (
    <div className="italian-list">
      <div className="search-bar">
        <input type="text" placeholder="Search..." pattern="[A-Za-z]*" />
        <a href="">
          <GoSearch className="click-search" />
        </a>
      </div>
      <div className="all-recipes">
        {italyData.map((italian) => (
          <RiceCard
            name={italian.name}
            ingredients={italian.ingredients}
            recipe={italian.recipe}
            image={italian.image}
            background="#e8bcb9"
          />
        ))}
      </div>
    </div>
  );
};

export default ItalianList;
