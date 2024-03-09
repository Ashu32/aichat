import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { userAuth } from "./context/AuthContext";

function App() {
  const auth = userAuth();
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth?.user && (
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
