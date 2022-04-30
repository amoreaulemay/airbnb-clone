/**
 * The state of the badge.
 * - `BadgeState.soldOut`: The event is sold out.
 * - `BadgeState.online`: The event is online.
 * - `BadgeState.noBadge`: No badge should be shown.
 */
export enum BadgeState {
    soldOut = "Sold out",
    online = "Online",
    noBadge = "",
}

/**
 * Convenience interface for named props.
 */
export interface CarousselElementModelProps {
    /**
     * The state of the badge.
     * - `BadgeState.soldOut`: The event is sold out.
     * - `BadgeState.online`: The event is online.
     * - `BadgeState.noBadge`: No badge should be shown.
     * 
     * @remarks
     * If this isn't set, defaults to `BadgeState.noBadge`.
     */
    badge?: BadgeState;

    /**
     * The URL for the image of the event.
     */
    imgUrl: URL;

    /**
     * The rating of the event. Lowest is 0.0 and maximum is 5.0.
     * 
     * @remarks
     * This parameter is optional, if there are no reviews. If either `rating` or `reviewNb` is undefined,
     * the app will not show any reviews.
     */
    rating?: number;

    /**
     * The number of reviews for the event.
     * 
     * @remarks
     * This parameter is optional, if there are no reviews. If either `rating` or `reviewNb` is undefined,
     * the app will not show any reviews.
     */
    reviewNb?: number;

    /**
     * The country of the event.
     */
    country: string;

    /**
     * A short one line description of the event.
     */
    description: string;

    /**
     * The price of the event. Will be rounded to the nearest integer.
     */
    price: number;

    /**
     * The activity's unique id.
     */
    id: string;
}

/**
 * A simple interface for a RatingModel.
 */
export interface RatingModel {
    rating: number;
    reviewNB: number;
}

/**
 * This model defines a `CarousselElement`.
 */
export class CarousselElementModel {
    private _badge: BadgeState;
    private _imgUrl: URL;
    private _rating?: number;
    private _reviewNb?: number;
    private _country: string;
    private _description: string;
    private _price: number;
    private _id: string;

    constructor(props: CarousselElementModelProps) {
        // Badge
        (typeof props.badge === 'undefined') ? this._badge = BadgeState.noBadge : this._badge = props.badge;

        // Image URL
        this._imgUrl = props.imgUrl;

        // Rating
        if (typeof props.rating !== 'undefined' && (0 <= props.rating && props.rating <= 5)) {
            this._rating = props.rating;
        }

        // Number of reviews
        this._reviewNb = props.reviewNb;

        // Country
        this._country = props.country;

        // Description
        this._description = props.description;

        // Price
        this._price = Math.round(props.price);

        // ID
        this._id = props.id;
    }

    // Getters

    /**
     * Determines if a badge should be shown over the activity's image.
     */
    public get shouldShowBadge(): boolean {
        return (this._badge !== BadgeState.noBadge);
    }

    /**
     * @returns
     * The text that should be displayed on the badge.
     */
    public get badgeText(): string {
        return this._badge.toUpperCase();
    }

    /**
     * Returns the image URL.
     */
    public get imageUrl(): string {
        return this._imgUrl.href;
    }

    /**
     * Get the ratings for the activity.
     * 
     * @returns `RatingModel` if there are ratings, otherwise `undefined`.
     */
    public getRatings(): RatingModel | undefined {
        if (typeof this._rating === 'undefined' || typeof this._reviewNb === 'undefined') {
            return undefined;
        }

        return {
            rating: this._rating!,
            reviewNB: this._reviewNb!,
        };
    }

    /**
     * Returns the country of the activity.
     */
    public get country(): string { return this._country; }

    /**
     * Returns a short description for the activity.
     * 
     * @remarks
     * If the description is longer than 25 charaters, it will be truncated to 22 charaters
     * with an ellipsis at the end.
     */
    public get description(): string {
        if (this._description.length > 25) {
            return this._description.substring(0, 21) + "...";
        } else {
            return this._description;
        }
    }

    /**
     * Returns the price of the activity.
     * 
     * @remarks The price is rounded to nearest integer.
     */
    public get price(): number { return this._price; }

    /**
     * Returns the activity's unique id.
     */
    public get id(): string { return this._id; }
}