import React from "react";
import Caroussel from "../components/Caroussel/Caroussel";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import "./styles/index.css";

export default class AirBnBExperiences extends React.Component {
    render() {
        return (
            <div className="AirBnBExperiences--wrapper">
                <header>
                    <NavBar />
                </header>
                <main>
                    <Hero />
                    <Caroussel />
                </main>
            </div>
        );
    }
}
