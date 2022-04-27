import React from "react";
import Gallery from "../Gallery/Gallery";
import HeroText from "../HeroText/HeroText";
import "./Hero.css";

export default class Hero extends React.Component {
    render() {
        return (
            <section className="Hero--wrapper">
                <Gallery />
                <HeroText />
            </section>
        );
    }
}
