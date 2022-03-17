import "./App.css";
import Looper from "./components/Looper/Looper";
import { LooperProvider } from "./store/LooperContext";

function App() {
  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <LooperProvider>
        <Looper />
      </LooperProvider>
    </div>
  );
}

export default App;
