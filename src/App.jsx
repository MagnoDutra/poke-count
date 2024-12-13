import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react";

const allCards = [
  {
    id: "a1001",
    cardName: "bulbasaur",
    pack: "mewtwo",
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 1 / 2,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1011",
    cardName: "weedle",
    pack: "mewtwo",
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 1 / 2,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1004",
    cardName: "ivysaur",
    pack: "mewtwo",
    rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0,
    percent4: 1 / 1,
    percent5: 1 / 1,
    acquired: false,
  },
  {
    id: "a1003",
    cardName: "oddish",
    pack: "charizard",
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 1 / 1,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1002",
    cardName: "caterpie",
    pack: "pikachu",
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 1 / 1,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
];

function App() {
  const [cards, setCards] = useState(allCards);

  function handleAcquireCard(id) {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, acquired: !card.acquired } : card
    );
    setCards(updatedCards);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Homepage cards={cards} handleAcquireCard={handleAcquireCard} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
