import { BadgeState, CarousselElementModel } from "../../models/CarousselElementModel";
import Globals from "../../globals/globals";

// API Schema
interface APIResponseModel {
    averageStars: number;
    reviewNb: number;
    price: string;
    description: string;
    image: string;
    country: string;
    online: boolean;
    fully_booked: boolean;
    id: string;
}

/**
 * Gets a list of activities from an API.
 * 
 * @returns An array of `CarousselElementModel` or an empty array if the function
 * fails to retrieve from API.
 */
export const getActivities = async (): Promise<CarousselElementModel[]> => {
    try {
        const resp = await fetch(Globals.ACTIVITIES_API);
        const json = await resp.json() as APIResponseModel[];

        return json.map(e => {
            let badge: BadgeState | undefined;

            // Mock API provides numbers with 5 digits.
            let averageRating = e.averageStars / 100000 * 5;
            let nbReviews = e.reviewNb % 1000;

            if (e.online) {
                badge = BadgeState.online;
            }

            if (e.fully_booked) {
                badge = BadgeState.soldOut;
            }

            return new CarousselElementModel({
                id: e.id,
                badge: badge,
                imgUrl: new URL(e.image),
                country: e.country,
                description: e.description,
                price: parseFloat(e.price),
                reviewNb: nbReviews,
                rating: averageRating,
            });
        });
    } catch (e) {
        console.warn("Unable to retrieve data!", e);
        return [];
    }
}