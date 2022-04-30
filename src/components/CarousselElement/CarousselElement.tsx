import React from "react";
import { CarousselElementModel } from "../../models/CarousselElementModel";
import CarousselElementCard from "../CarousselElementCard/CarousselElementCard";
import CEDetails from "../CEDetails/CEDetails";
import CEReviews from "../CEReviews/CEReviews";
import "./CarousselElement.css";

interface CarousselElementProps {
    data: CarousselElementModel;
}

export default class CarousselElement extends React.Component<CarousselElementProps> {
    render() {
        return (
            <div className="CarousselElement--wrapper">
                <CarousselElementCard data={this.props.data} />
                <CEReviews data={this.props.data} />
                <CEDetails data={this.props.data} />
            </div>
        );
    }
}
