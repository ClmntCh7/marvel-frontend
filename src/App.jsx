import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Header from "./components/Header";
// import Modals from "./components/Modals";

// Pages
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import CharacterPage from "./pages/CharacterPage";
import ComicPage from "./pages/ComicPage";
import MyFavorites from "./pages/MyFavorites";

const App = () => {
  const [search, setSearch] = useState("");
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
        <Route
          path="/my-favorites"
          element={
            <MyFavorites
              myFavorites={myFavorites}
              setMyFavorites={setMyFavorites}
            />
          }
        />

        <Route path="/character/:characterId" element={<CharacterPage />} />
        <Route path="/comics/:characterId" element={<CharacterPage />} />
        <Route path="/comic/:comicId" element={<ComicPage />} />
      </Routes>

      {/* <Modals /> */}
    </Router>
  );
};

export default App;
