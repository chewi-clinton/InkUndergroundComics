import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CharacterPage from "./pages/CharacterPage";
import ComicPage from "./pages/ComicPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import CommunityPage from "./pages/CommunityPage";
import NewsPage from "./pages/NewsPage";
import "./App.css";
import HomePage from "./pages/Home";
import ComicDetailPage from "./pages/ComicDetailPage";
import ComicOverviewPage from "./pages/ComicOverviewPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<HomePage />} />

          {/* Page Routes */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/comicdetail" element={<ComicDetailPage />} />
          <Route path="/comicoverview" element={<ComicOverviewPage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/character-detail" element={<CharacterDetailPage />} />
          <Route path="/comics" element={<ComicPage />} />
          <Route path="/community" element={<CommunityPage />} />

          {/* Optional: Add a 404 Not Found redirect or component */}
          <Route path="*" element={<NewsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
