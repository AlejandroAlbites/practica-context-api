import "./App.css";

import { DataProvider } from "./store/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
