import "./styles.css";
import Contador from "./componente/contador";

export default function App() {
  return (
    <div className="App">
      <Contador nombre="Juan" edad="50" activo="true" />
    </div>
  );
}
