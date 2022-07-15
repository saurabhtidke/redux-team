import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClassVIII } from "./Componants/ClassVIII";
import { NavBar } from "./Componants/NavBar";
import { ClassIX } from "./Componants/ClassIX";
import { ClassX } from "./Componants/ClassX";
import { Provider } from "react-redux";
import { configstore } from "./State/configStore";
import { CricketTeam } from "./Componants/CricketTeam";
import { FootballTeam } from "./Componants/FootballTeam";
import { Coaches } from "./Componants/Coaches";
function App() {
  const localStore = configstore();
  return (
    <div className="app">
      <h1>The Class</h1>
      <Provider store={localStore}>
        <BrowserRouter>
          <NavBar />
          <br />
          <Routes>
            <Route path="/8th" element={<ClassVIII />} />
            <Route path="/9th" element={<ClassIX />} />
            <Route path="/10th" element={<ClassX />} />
            <Route path="/cricinfo" element={<CricketTeam />} />
            <Route path="/footinfo" element={<FootballTeam />} />
            <Route path="/coachinfo" element={<Coaches />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
