import React, { Component } from "react";
import Logo from "./Logo";
import Team from "./Team";
import styles from "./App.module.css";
import { Button } from "@mantine/core";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="welcome">
        <Logo />
        <h1>Ivy Ukraine</h1>
        <div className="description">
          <p>
            To już III edycja projektu! Klinika Matmy oferuje wsparcie
            edukacyjne dla dzieci pracowników opieki zdrowotnej ze wszystkich
            przedmiotów szkolnych.
          </p>

          <p>
            Przyjmujemy zgłoszenia na bezpłatne korepetycje online. ze
            wszystkich przedmiotów szkolnych. Szukamy wolontariuszy, którzy
            byliby chętni udzielać lekcji.
          </p>
        </div>

        <div className="controls">
          <Button>Znajdź Tutora</Button>
          <Button>Zaoferuj Pomoc</Button>
        </div>

        <Team />
        <Contact />
      </div>
    );
  }
}

export default App;
