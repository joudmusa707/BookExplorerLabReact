import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetails />} />
          </Routes>
          <MyFooter />
        </main>
      </Router>
    </>
  );
}

export default App;
