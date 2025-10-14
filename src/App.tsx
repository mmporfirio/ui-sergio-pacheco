import { Toaster } from "react-hot-toast";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Atualizacoes from "./pages/Atualizacoes";
import EventoDetalhes from "./pages/EventoDetalhes";
import Eventos from "./pages/Eventos";
import Historia from "./pages/Historia";
import Home from "./pages/Home";
import Arvores from "./pages/Arvores";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/arvore" element={<Arvores />} />
            <Route path="/atualizacoes" element={<Atualizacoes />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos/:id" element={<EventoDetalhes />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
