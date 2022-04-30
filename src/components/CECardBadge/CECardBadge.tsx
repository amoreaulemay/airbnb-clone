import React from "react";
import { CarousselElementModel } from "../../models/CarousselElementModel";
import "./CECardBadge.css";

interface CECardBadgeProps {
    data: CarousselElementModel;
}

export default class CECardBadge extends React.Component<CECardBadgeProps> {
    render() {
        if (this.props.data.shouldShowBadge) {
            return (
                <div className="CECardBadge--wrapper">
                    <span>{this.props.data.badgeText}</span>
                </div>
            );
        } else {
            return <></>;
        }
    }
}
