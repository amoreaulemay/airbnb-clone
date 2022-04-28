import {
    GalleryImage,
    ImageDimensions,
} from "../../components/GalleryImage/GalleryImage";

enum ImageOrientation {
    horizontal,
    vertical,
}

/**
 * The default amount of image to generate.
 *
 * @internal
 */
const DEFAULT_IMG_NB = 9;

/**
 * The default image ratio
 *
 * @internal
 */
const DEFAULT_RATIO = 3 / 2;

/**
 * Default size of the smallest border
 *
 * @internal
 */
const DEFAULT_SIZE = 100;

const DEFAULT_ORIENTATION = ImageOrientation.vertical;

const placeholderURL = (dimensions: ImageDimensions): string => {
    const ids = [
        0, 1, 10, 100, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1008, 1009,
        101, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1018, 1019, 102, 1020,
        1021, 1022, 1023, 1024, 1025,
    ];

    const randomID = ids[~~(ids.length * Math.random())];

    return `https://picsum.photos/id/${randomID}/${dimensions.width}/${dimensions.height}`;
};

/**
 * Simple function that generates `ImageDimensions` based on a given orientation,
 * ratio and size. If values are obmitted, defaults to the predetermined constants.
 *
 * See:
 * - `DEFAULT_ORIENTATION`;
 * - `DEFAULT_SIZE`;
 * - `DEFAULT_RATIO`;
 *
 * for infos.
 *
 * @param orientation The orientation of the image.
 * @param size The size of the shortest border.
 * @param ratio The ratio of the image, given with x:y.
 * @returns An `ImageOrientation` object.
 */
export const generateImageDimensions = (
    orientation: ImageOrientation = DEFAULT_ORIENTATION,
    size: number = DEFAULT_SIZE,
    ratio: number = DEFAULT_RATIO
): ImageDimensions => {
    switch (orientation) {
        case ImageOrientation.horizontal:
            return {
                height: Math.round(size),
                width: Math.round(size * ratio),
            };
        case ImageOrientation.vertical:
            return {
                height: Math.round(size * ratio),
                width: Math.round(size),
            };
    }
};

/**
 * The default probability of getting a vertical image.
 */
const PROB_VERTICAL = 8 / 9;

export const galleryGenerator = (
    imageNb: number = DEFAULT_IMG_NB,
    vertical_weight: number = PROB_VERTICAL
): JSX.Element[] => {
    let galleryList: JSX.Element[] = [];

    for (let i = 0; i < imageNb; i++) {
        let rnd = Math.random();

        if (rnd <= vertical_weight) {
            // Image is vertical
            galleryList.push(
                <GalleryImage
                    src={placeholderURL(
                        generateImageDimensions(ImageOrientation.vertical)
                    )}
                />
            );
        } else {
            // Image is horizontal
            galleryList.push(
                <GalleryImage
                    src={placeholderURL(
                        generateImageDimensions(ImageOrientation.horizontal)
                    )}
                />
            );
        }
    }

    return galleryList;
};
