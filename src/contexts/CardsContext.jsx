import { createContext, useContext, useState } from "react";

import { allCards } from "../data/allCards";

const CardsContext = createContext();

function CardsProvider({ children }) {
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
    <CardsContext.Provider value={{ cards, handleAcquireCard, handleToggle }}>
      {children}
    </CardsContext.Provider>
  );
}

function useCards() {
  const context = useContext(CardsContext);

  if (context == undefined) throw new Error("context out of bounds");

  return context;
}

export { CardsProvider, useCards };
