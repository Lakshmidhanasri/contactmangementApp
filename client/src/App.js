import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <AuthForm />
        <ContactForm />
        <ContactList />
      </div>
    </AuthProvider>
  );
};

export default App;
