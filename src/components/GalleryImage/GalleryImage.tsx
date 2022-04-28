import React, { useState, useEffect } from "react";
import "./GalleryImage.css";

import { v4 as uuid } from "uuid";

export interface GalleryImageProps {
    src: string;
    alt?: string;
}

interface GalleryImageState {
    width: number;
    height: number;
}

enum LongestBorder {
    height,
    width,
}

export interface ImageDimensions {
    height: number;
    width: number;
}

const IMG_LONGEST_BORDER: number = 100;

export class GalleryImage extends React.Component<
    GalleryImageProps,
    GalleryImageState
> {
    private _id: string;
    private _originalHeight: number = 1;
    private _originalWidth: number = 1;
    private _longestBorder: LongestBorder = LongestBorder.height;

    constructor(props: GalleryImageProps) {
        super(props);
        this._id = uuid();
        this.state = {
            width: 1,
            height: 1,
        };
    }

    componentDidMount() {
        this._getDimensions(
            (longest_border: LongestBorder, dimensions: ImageDimensions) => {
                this._longestBorder = longest_border;
                this._originalHeight = dimensions.height;
                this._originalWidth = dimensions.width;

                this.setState({
                    height: this._height,
                    width: this._width,
                });
            }
        );
    }

    private get _height(): number {
        if (this._longestBorder == LongestBorder.height) {
            return Math.min(this._originalHeight, IMG_LONGEST_BORDER);
        } else {
            return Math.round(
                (this._width * this._originalHeight) / this._originalWidth
            );
        }
    }

    private get _width(): number {
        if (this._longestBorder == LongestBorder.width) {
            return Math.min(this._originalWidth, IMG_LONGEST_BORDER);
        } else {
            return Math.round(
                (this._height * this._originalWidth) / this._originalHeight
            );
        }
    }

    private _getDimensions(
        cb: (longest_border: LongestBorder, dimensions: ImageDimensions) => void
    ) {
        let newImg = new Image();

        newImg.onload = () => {
            if (newImg.width >= newImg.height) {
                cb(LongestBorder.width, {
                    height: newImg.height,
                    width: newImg.width,
                });
            } else {
                cb(LongestBorder.height, {
                    height: newImg.height,
                    width: newImg.width,
                });
            }
        };

        newImg.src = this.props.src;
    }

    render() {
        return (
            <div className="GalleryImage--wrapper">
                <img
                    src={this.props.src}
                    id={this._id}
                    height={this.state.height}
                    width={this.state.width}
                    alt={this.props.alt}
                />
            </div>
        );
    }
}
