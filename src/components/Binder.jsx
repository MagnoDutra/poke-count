import Card from "./Card";

function Binder({ cards, handleAcquireCard }) {
  return (
    <div>
      <ul>
        {cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            handleAcquireCard={handleAcquireCard}
          />
        ))}
      </ul>
    </div>
  );
}

export default Binder;
