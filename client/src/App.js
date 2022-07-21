import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import PageRecruit from "./pages/PageRecruit";
import PageMain from "./pages/PageMain";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/recruit" element={<PageRecruit />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
