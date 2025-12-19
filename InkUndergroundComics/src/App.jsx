import Footer from "./components/Footer";
import Header from "./components/Header";
import Character from "./pages/CharacterPage";
import "./App.css";
import ComicPage from "./pages/ComicPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import CommunityPage from "./pages/CommunityPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <>
      <Header />
      <NewsPage />
      <Footer />
    </>
  );
}

export default App;
