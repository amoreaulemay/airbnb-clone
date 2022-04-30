import React from "react";
import { CarousselElementModel } from "../../models/CarousselElementModel";
import CECardBadge from "../CECardBadge/CECardBadge";
import "./CarousselElementCard.css";

interface CarousselElementCardProps {
    data: CarousselElementModel;
}

export default class CarousselElementCard extends React.Component<CarousselElementCardProps> {
    render() {
        return (
            <div
                className="CarousselElementCard--wrapper"
                style={{ background: `url(${this.props.data.imageUrl})` }}
            >
                <CECardBadge data={this.props.data} />
            </div>
        );
    }
}
