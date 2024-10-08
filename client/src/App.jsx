import "./App.css";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { MainContent } from "./components/Main-Content";
function App() {
  return (
    <main className="app">
      <Header />
      <Aside />
      <MainContent />
    </main>
  );
}

export default App;
