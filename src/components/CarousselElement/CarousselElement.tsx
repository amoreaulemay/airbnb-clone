import React from "react";
import { CarousselElementModel } from "../../models/CarousselElementModel";
import "./CarousselElement.css";

interface CarousselElementProps {
    data: CarousselElementModel;
}

export default class CarousselElement extends React.Component<CarousselElementProps> {
    render() {
        return <div className="CarousselElement--wrapper"></div>;
    }
}
