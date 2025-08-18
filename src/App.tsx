import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
