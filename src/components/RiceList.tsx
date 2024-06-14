/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import "./Rice.css";
import RiceCard from "./RiceCard";

interface RiceFormat {
  name: String;
  ingredients: String[];
  recipe: String;
  image: string;
}

const RiceList = () => {
  const [riceData, setRiceData] = useState<RiceFormat[]>([]);

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
      const jsonData = await fetchData("/Rice.json");
      setRiceData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  })();
  return (
    <div className="rice-list">
      <div className="search-bar">
        <input type="text" placeholder="Search..." pattern="[A-Za-z]*" />
        <a href="">
          <GoSearch className="click-search" />
        </a>
      </div>
      <div className="all-recipes">
        {riceData.map((oneRice) => (
          <RiceCard
            name={oneRice.name}
            ingredients={oneRice.ingredients}
            recipe={oneRice.recipe}
            image={oneRice.image}
            background="#c9a3a8"
          />
        ))}
      </div>
    </div>
  );
};

export default RiceList;
