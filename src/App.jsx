import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Components
import Header from "./components/Header";
// import Modals from "./components/Modals";

// Pages
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import CharacterPage from "./pages/CharacterPage";
import ComicPage from "./pages/ComicPage";

const App = () => {
  const [search, setSearch] = useState("");
  // const [isFavorite, setIsFavorite] = useState(false);
  const [myFavorites, setMyFavorites] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              // isFavorite={isFavorite}
              // setIsFavorite={setIsFavorite}
              myFavorites={myFavorites}
              setMyFavorites={setMyFavorites}
            />
          }
        />
        <Route path="/characters" element={<Home />} />
        <Route
          path="/comics"
          element={
            <Comics
              search={search}
              setSearch={setSearch}
              myFavorites={myFavorites}
              setMyFavorites={setMyFavorites}
            />
          }
        />
        <Route path="/characters/:characterId" element={<CharacterPage />} />
        <Route path="/comics/:characterId" element={<CharacterPage />} />
        <Route path="/comic/:comicId" element={<ComicPage />} />
      </Routes>
      {/* <Modals /> */}
    </Router>
  );
};

export default App;
