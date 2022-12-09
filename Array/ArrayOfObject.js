let fruits = [
    {
        fruitName: "Apple",
        fruitColor: "Red",
    },
    {
        fruitName: "Pomegranate",
        fruitColor: "Red",
    },
    {
        fruitName: "Grapes",
        fruitColor: "Green",
    },
    {
        fruitName: "Kiwi",
        fruitColor: "Green",
    },
];
let filterFruits = fruits.filter((fruit) =>
    fruit.fruitColor === "Red");
console.log(filterFruits);