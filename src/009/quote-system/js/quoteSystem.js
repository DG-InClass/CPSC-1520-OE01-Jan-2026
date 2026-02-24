// I can make functions for validating the quote inputs
const feedbackOnImagePricing = function (imageCount, pricePerImage) {
    let message = '';
    // Recall how our conditional expression must be interpreted
    // as a true or false value for the computer to understand
    // what to do in our if statement.
    // In JavaScript, an empty string, the number 0, and the
    // special values of null and undefined are all treated
    // as "falsey" (equivalent to false). Any other non-boolean
    // value is treated as "truthy"
    if (imageCount) { // Remember, we know this is a number
        // TODO: A price-per-image must be $10 or greater.
        message += `\n${imageCount} images at $ ${pricePerImage}/image`;
    } else if (pricePerImage) {
        message += `\n\tNOTE: No images are included, but a price per image was supplied: ${pricePerImage}`;
    } else {
        message += `\nThere are no images included in this estimate.`;
    }
    return message;
}

export { feedbackOnImagePricing }
