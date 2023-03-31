import { useState, useEffect, ChangeEvent } from "react";

import "./App.css";

import Cardlist from "./components/card-list/cardlist";
import SearchBox from "./components/search-box/search";

export interface IRobots {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState<IRobots[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldOn = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldOn);
  };

  const filterList = robots.filter((user) => {
    return user.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="robolist-container">
      <SearchBox searchChange={onSearchChange} placeholder="Search Robots" />
      <Cardlist userRobots={filterList} />
    </div>
  );
};

export default App;
