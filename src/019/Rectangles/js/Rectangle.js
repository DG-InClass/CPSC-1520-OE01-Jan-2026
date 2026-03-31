/* Notes:
    - Members of a class can be either static or instance
    - Instance members belong to the individual objects created with the new keyword.
    - Static members are "shared" among all the objects.
*/

const Rectangle = class {
    // Properties/fields can be declared inside the class
    // at the same "level" as the functions of a class


    // A class can have only one constructor function.
    // The name of that function is always `constructor`
    constructor(height, width) {
        // The body of the constructor
        // The job of the constructor is to make sure
        // all the properties have "meaningful" values
        this.height = height;
        this.width = width;
        Rectangle.#count++; // Keeping track of how many rectangles have been created
    }

    // When we use the static keyword for either a
    // field (such as #count) or a getter/setter
    // or a function, then that means the static item
    // is being "shared" among all the instances of
    // the class.
    static #count = 0; // Static private property

    // Static public getter
    static get count() {
        return Rectangle.#count;
    }

    report() {
        let message = `There are ${Rectangle.#count} rectangles in total. This rectangle has a height of ${this.height} and a width of ${this.width}.`;
        console.log(message);
    }

    /**
     * Render this rectangle into the DOM.
     * @param {HTMLElement} container - The DOM element to hold this shape
     * @returns {HTMLDivElement} - This rectangle as a `<div>`
     */
    render(container) {
        // Create a `<div>` with certain styles
        // - w-[{width}px]
        // - h-[{height}px]
        const divEl = document.createElement('div');
        divEl.classList.add('border', 'border-green-900', 'border-5');
        // NOTE: Because the width/height styling is
        //       being dynamically calculated, we have to apply them
        //       to the divEl via the styles properties
        divEl.style.width = `${this.width}px`;
        divEl.style.height = `${this.height}px`;

        // Append the div to the container
        container.appendChild(divEl);

        // return a reference
        return divEl;
    }
} // end of the Rectangle class

export { Rectangle }
