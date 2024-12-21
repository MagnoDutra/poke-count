import Binder from "../components/Binder";
import Header from "../components/Header";
import ResultContainer from "../components/ResultContainer";
import Tab from "../components/Tab";
import { useCards } from "../contexts/CardsContext";

function Homepage() {
  const { toggleCards } = useCards();

  return (
    <main>
      <Header>
        <Tab />
      </Header>
      <ResultContainer />
      <button onClick={toggleCards}>Toggle</button>
      <Binder />
    </main>
  );
}

export default Homepage;
