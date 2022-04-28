import React from "react";
import "./HeroText.css";

export interface HeroTextProps {
    title?: string;
    message?: string;
}

export default class HeroText extends React.Component<HeroTextProps> {
    render() {
        return (
            <div className="HeroText--wrapper">
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
