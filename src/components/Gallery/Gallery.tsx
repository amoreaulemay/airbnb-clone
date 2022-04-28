import React from "react";
import { galleryGenerator } from "../../data/gallery_generator/gallery_generator";
import "./Gallery.css";

export default class Gallery extends React.Component {
    private _images: JSX.Element[];

    constructor(props: {}) {
        super(props);

        this._images = galleryGenerator().map((el, index) => (
            <div key={index}>{el}</div>
        ));
    }

    render() {
        return <div className="Gallery--wrapper">{this._images}</div>;
    }
}
