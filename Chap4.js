// Objects and arrays

//This is just bunch of examples from the book chapter 4 Objects and Arrays

var day1 = {
    squirrel: false,
    events: ["work","touched tree","pizza","running","television"]
};

var descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

//Array of Objects
var journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "couliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true}
    
    /* and so on */
    ];
    
//The lycanthrope's log

var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
    });
}


