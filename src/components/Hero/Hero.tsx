import React from "react";
import Gallery from "../Gallery/Gallery";
import HeroText from "../HeroText/HeroText";

export default class Hero extends React.Component {
    render() {
        return (
            <section className="hero--wrapper">
                <Gallery />
                <HeroText />
            </section>
        );
    }
}
