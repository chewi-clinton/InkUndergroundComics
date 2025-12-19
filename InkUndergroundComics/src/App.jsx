import Footer from "./components/Footer";
import Header from "./components/Header";
import Character from "./pages/CharacterPage";
import "./App.css";
import ComicPage from "./pages/ComicPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";

function App() {
  return (
    <>
      <Header />
      <CharacterDetailPage />
      <Footer />
    </>
  );
}

export default App;
