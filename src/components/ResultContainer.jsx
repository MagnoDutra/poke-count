import ResultPack from "./ResultPack";
import styles from "./ResultContainer.module.css";
import { useCards } from "../contexts/CardsContext";

function calcChance(cards) {
  const { totalNotChance1To3, totalNotChance4, totalNotChance5 } = cards.reduce(
    (chances, card) => {
      if (!card.acquired) {
        chances.totalNotChance1To3 -= card.percent1To3;
        chances.totalNotChance4 -= card.percent4;
        chances.totalNotChance5 -= card.percent5;
      }

      return chances;
    },
    { totalNotChance1To3: 1, totalNotChance4: 1, totalNotChance5: 1 }
  );

  const probabilityNotGettingNewCard =
    totalNotChance1To3 ** 3 * totalNotChance4 * totalNotChance5;

  const newCardProbability = 1 - probabilityNotGettingNewCard;
  return (newCardProbability * 100).toFixed(2);
}

function ResultContainer() {
  const { cards } = useCards();

  const mewtwoPack = cards.filter((card) => card.pack.includes("mewtwo"));
  const pikachuPack = cards.filter((card) => card.pack.includes("pikachu"));
  const charizardPack = cards.filter((card) => card.pack.includes("charizard"));

  const mewtwoChance = calcChance(mewtwoPack);
  const pikachuChance = calcChance(pikachuPack);
  const charizardChance = calcChance(charizardPack);

  return (
    <div className={styles.container}>
      <ResultPack pack="mewtwo" newCardChance={mewtwoChance} />
      <ResultPack pack="charizard" newCardChance={charizardChance} />
      <ResultPack pack="pikachu" newCardChance={pikachuChance} />
    </div>
  );
}

export default ResultContainer;
