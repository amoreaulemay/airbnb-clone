import React from "react";
import { CarousselElementModel } from "../../models/CarousselElementModel";
import "./CEDetails.css";

interface CEDetailsProps {
    data: CarousselElementModel;
}

export default class CEDetails extends React.Component<CEDetailsProps> {
    render() {
        return (
            <div className="CEDetails--wrapper">
                <span className="description">
                    {this.props.data.description.charAt(0).toUpperCase() +
                        this.props.data.description.slice(1)}
                </span>
                <span className="price">
                    <strong>From ${this.props.data.price}</strong> / Person
                </span>
            </div>
        );
    }
}
