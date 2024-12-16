import Binder from "../components/Binder";
import Header from "../components/Header";
import ResultContainer from "../components/ResultContainer";
import Tab from "../components/Tab";

function Homepage({ cards, handleAcquireCard, toggleCards }) {
  return (
    <main>
      <Header>
        <Tab />
      </Header>
      <ResultContainer cards={cards} />
      <button onClick={toggleCards}>Toggle</button>
      <Binder cards={cards} handleAcquireCard={handleAcquireCard} />
    </main>
  );
}

export default Homepage;
