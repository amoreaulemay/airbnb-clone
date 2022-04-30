import React from "react";
import { CarousselElementModel } from "../../models/CarousselElementModel";
import CEReviewsStarIcon from "../CEReviewsStarIcon/CEReviewsStarIcon";
import "./CEReviews.css";

interface CEReviewsProps {
    data: CarousselElementModel;
}

export default class CEReviews extends React.Component<CEReviewsProps> {
    render() {
        return (
            <div className="CEReviews--wrapper">
                <CEReviewsStarIcon />
                <span className="stars">
                    {this.props.data.getRatings()?.rating.toFixed(1) ?? 0}
                </span>
                <span className="reviewsNb">
                    ({this.props.data.getRatings()?.reviewNB ?? 0})
                </span>
                <span className="country">{this.props.data.country}</span>
            </div>
        );
    }
}
