import Footer from "./components/Footer";
import Header from "./components/Header";
import Character from "./pages/CharacterPage";
import "./App.css";
import ComicPage from "./pages/ComicPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <>
      <Header />
      <CommunityPage />
      <Footer />
    </>
  );
}

export default App;
