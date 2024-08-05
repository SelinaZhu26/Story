// creating a story
let name = prompt("What's your name?")
let number = prompt("How many boxes did you buy?")
let total = (number * 12)

console.log(name + " bought dozens of donuts. " + name + " counted and there were " + number + " boxes. There is a total of " + total + " donuts. Will she have enough to feed 40 people?")


if (total >= 40) {
    console.log("yes")
}
else {
    console.log("no")
}
