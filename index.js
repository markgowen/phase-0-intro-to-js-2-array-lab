// Write your solution here!
const cats = [
    "Milo", 
    "Otis", 
    "Garfield"
];


function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    const moreCats = [...cats, name];
    return moreCats;
} 

function prependCat(name) {
    const evenMoreCats = [name, ...cats];
    return evenMoreCats;
}

function removeLastCat() {
    const lastCats = cats.slice(0, -1);
    return lastCats;
}

function removeFirstCat() {
    const firstCat = cats.slice(1);
    return firstCat;
}
