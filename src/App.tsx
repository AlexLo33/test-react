import { Route, Routes } from "react-router-dom";

// Components
import Layout from "./Layout";
import MainPageExercices from "./pages/exercices/MainPageExercices";
import MainPageBugs from "./pages/bugs/MainPageBugs";

// Styles
import "@omng/storybook/dist/index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="/exercices" element={<MainPageExercices />} />
          <Route path="/bugs" element={<MainPageBugs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
