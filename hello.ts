import type { Point } from './Point';

// Test dans le shell
function greet(person: string, date: Date) {

    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Rémy Giro', new Date());


// Affiche les coords dans le shell
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
} 

printCoord({ x: 100, y: 250 });