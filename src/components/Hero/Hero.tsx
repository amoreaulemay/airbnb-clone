import React from "react";
import { heroGenerator } from "../../data/hero_generator/heroGenerator";
import Gallery from "../Gallery/Gallery";
import HeroText from "../HeroText/HeroText";
import "./Hero.css";

export default class Hero extends React.Component {
    private _heroText = heroGenerator();

    render() {
        return (
            <section className="Hero--wrapper">
                <Gallery />
                <HeroText
                    title={this._heroText.title}
                    message={this._heroText.message}
                />
            </section>
        );
    }
}
