import React, { Component } from "react";
import Logo from "./Logo";
import Team from "./Team";
import styles from "./App.module.css";
import { Button } from "@mantine/core";
import Contact from "./Contact";
import Faq from "./Faq";
import Stats from "./Stats";
import Footer from "./Footer";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div className="welcome">
        <div className={"hero"}>
          <div className={"heroItems"}>
            <Logo />
            <h1>Ivy Ukraine</h1>
            <div className="description">
              <p>
                To już III edycja projektu! Klinika Matmy oferuje wsparcie
                edukacyjne dla dzieci pracowników opieki zdrowotnej ze
                wszystkich przedmiotów szkolnych.
              </p>
            </div>
            <div className="controls">
              <Button id={"findTutor"}>
                <span>Znajdź Tutora</span>
              </Button>
              <Button id={"offerHelp"}>
                <span>Zaoferuj Pomoc</span>
              </Button>
            </div>
          </div>
        </div>

        <About />

        <Stats />
        <Faq />
        <Team />

        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
