import React from "react";
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import "./NavBar.css";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="NavBar--wrapper">
                <NavBarLogo />
            </nav>
        );
    }
}
