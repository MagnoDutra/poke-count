import Binder from "../components/Binder";
import Header from "../components/Header";
import ResultContainer from "../components/ResultContainer";
import Tab from "../components/Tab";

function Homepage({ cards, handleAcquireCard }) {
  return (
    <main>
      <Header>
        <Tab />
      </Header>
      <ResultContainer cards={cards} />
      <Binder cards={cards} handleAcquireCard={handleAcquireCard} />
    </main>
  );
}

export default Homepage;
