import { Rectangle } from "./Rectangle";
const shapes = [];

document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    const w = randomSize(); //10;
    const h = randomSize(); //5;
    
    // Create the Rectangle object.
    const box = new Rectangle(h, w);
    
    shapes.push(box);
    console.log('box created:', box);
    box.report(); // call my method/function of my Rectangle instance
    document.getElementById('box-count').innerText = `There are ${Rectangle.count} boxes so far.`;

    const domContainer = document.getElementById('shapes');
    box.render(domContainer);
});

function randomSize() {
    const size = Math.floor(Math.random() * 45 + 5);
    return size;
}