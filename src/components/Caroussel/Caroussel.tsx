import React from "react";
import { getActivities } from "../../data/activities/getActivities";
import { CarousselElementModel } from "../../models/CarousselElementModel";
import CarousselElement from "../CarousselElement/CarousselElement";
import "./Caroussel.css";

interface CarousselState {
    data: CarousselElementModel[];
}

export default class Caroussel extends React.Component<{}, CarousselState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            data: [],
        };
    }

    async componentDidMount() {
        const activities = await getActivities();

        this.setState({ data: activities });
    }

    render() {
        return (
            <section className="Caroussel--wrapper">
                {this.state.data.map((e) => {
                    return <CarousselElement key={e.id} data={e} />;
                })}
            </section>
        );
    }
}
