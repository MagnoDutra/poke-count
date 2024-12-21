import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { CardsProvider } from "./contexts/CardsContext";

function App() {
  return (
    <CardsProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </CardsProvider>
  );
}

export default App;
