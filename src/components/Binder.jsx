import Card from "./Card";
import styles from "./Binder.module.css";
import { useCards } from "../contexts/CardsContext";
import { useState } from "react";

function Binder() {
  const { cards } = useCards();
  const [page, setPage] = useState(1);

  const itemsPerPage = 30;
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const indexLastItem = page * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = cards.slice(indexFirstItem, indexLastItem);

  function handleNextPage() {
    if (page < totalPages) setPage((page) => page + 1);
  }

  function handlePreviousPage() {
    if (page > 1) setPage((page) => page - 1);
  }

  return (
    <div className={styles.binderContainer}>
      <button onClick={handlePreviousPage} disabled={page === 1}>
        esquerda
      </button>
      <div className={styles.container}>
        {currentItems.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      <button onClick={handleNextPage} disabled={page === totalPages}>
        direita
      </button>
    </div>
  );
}

export default Binder;
