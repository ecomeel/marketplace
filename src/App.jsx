import "./App.scss";
import { Header } from "./components/header/Header";
import { Adjustment } from "./components/adjustment/Adjustment";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Adjustment />
      </main>
    </div>
  );
}

export default App;
