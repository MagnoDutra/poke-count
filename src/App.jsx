import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react";

const allCards = [
  {
    id: "a1001",
    cardName: "bulbasaur",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1002",
    cardName: "weedle",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1003",
    cardName: "kakuna",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1004",
    cardName: "venonat",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1005",
    cardName: "scyther",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1006",
    cardName: "cottonee",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1007",
    cardName: "petilil",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1008",
    cardName: "ponyta",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1009",
    cardName: "heatmor",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1010",
    cardName: "salandit",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1011",
    cardName: "salazzle",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1012",
    cardName: "sizzlipede",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1013",
    cardName: "psyduck",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1014",
    cardName: "tentacool",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1015",
    cardName: "shellder",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1016",
    cardName: "krabby",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1017",
    cardName: "snom",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1018",
    cardName: "blitzle",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1019",
    cardName: "tynamo",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1020",
    cardName: "helioptile",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1021",
    cardName: "heliolisk",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1022",
    cardName: "slowpoke",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1023",
    cardName: "gastly",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1024",
    cardName: "jynx",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1025",
    cardName: "ralts",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1026",
    cardName: "woobat",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1027",
    cardName: "swoobat",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1028",
    cardName: "golett",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1029",
    cardName: "sandshrew",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1030",
    cardName: "cubone",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1031",
    cardName: "hitmonlee",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1032",
    cardName: "rhyhorn",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1033",
    cardName: "clobbopus",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1034",
    cardName: "ekans",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1035",
    cardName: "zubat",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1036",
    cardName: "grimer",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1037",
    cardName: "koffing",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1038",
    cardName: "pawniard",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1039",
    cardName: "dratini",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1040",
    cardName: "pidgey",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1041",
    cardName: "pidgeotto",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1042",
    cardName: "rattata",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1043",
    cardName: "raticate",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1044",
    cardName: "farfetchd",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1045",
    cardName: "doduo",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1046",
    cardName: "eevee",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1047",
    cardName: "minccino",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1048",
    cardName: "wooloo",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1049",
    cardName: "dubwool",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  {
    id: "a1050",
    cardName: "old-amber",
    pack: ["mewtwo"],
    rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
    percent1To3: 0.02,
    percent4: 0,
    percent5: 0,
    acquired: false,
  },
  // {
  //   id: "asdda",
  //   cardName: "ivysaur",
  //   pack: "mewtwo",
  //   rarity: "uncommon", // common, uncommon, rare, double, art, super, immersive, crown
  //   percent1To3: 0,
  //   percent4: 1 / 1,
  //   percent5: 1 / 1,
  //   acquired: false,
  // },
  // {
  //   id: "fgfh",
  //   cardName: "oddish",
  //   pack: "charizard",
  //   rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
  //   percent1To3: 1 / 1,
  //   percent4: 0,
  //   percent5: 0,
  //   acquired: false,
  // },
  // {
  //   id: "bnm",
  //   cardName: "caterpie",
  //   pack: "pikachu",
  //   rarity: "common", // common, uncommon, rare, double, art, super, immersive, crown
  //   percent1To3: 1 / 1,
  //   percent4: 0,
  //   percent5: 0,
  //   acquired: false,
  // },
];

function App() {
  const [cards, setCards] = useState(allCards);

  function handleAcquireCard(id) {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, acquired: !card.acquired } : card
    );
    setCards(updatedCards);
  }

  function handleToggle() {
    if (cards.some((card) => !card.acquired)) {
      const updatedCards = cards.map((card) => ({ ...card, acquired: true }));
      setCards(updatedCards);
    } else {
      const updatedCards = cards.map((card) => ({ ...card, acquired: false }));
      setCards(updatedCards);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Homepage
              cards={cards}
              handleAcquireCard={handleAcquireCard}
              toggleCards={handleToggle}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
