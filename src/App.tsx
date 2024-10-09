import { Menu } from "./components/Menu/Menu";
import "./App.css";

const actions = ["Esplora", "Combatti", "Compra"];

function App() {
  return (
    <>
      <h1>Epochate</h1>
      <Menu actions={actions} />
    </>
  );
}

export default App;
