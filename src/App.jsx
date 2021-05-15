import React from "react";
import "./App.css";
import HeaderSection from "./components/Header/header";
import DropdownSection from "./components/Dropdown/Dropdown";
import OpeningCrawlSection from "./components/OpeningCrawl/OpeningCrawl";
import CharacterListFilterSection from "./components/CharacterListFilter/CharacterListFilter";
import CharacterListSection from "./components/CharacterList/CharacterList";

function App() {
  return (
    <div className="app-container">
      <HeaderSection />
      <DropdownSection />
      <OpeningCrawlSection />
      <CharacterListFilterSection />
      <CharacterListSection />
    </div>
  );
}

export default App;
