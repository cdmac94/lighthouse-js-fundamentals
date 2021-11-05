// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++
};

for(let b = 0; b < ingredients.length; b++){
  console.log(ingredients[b]);
}

for (let r = 7; r > 0; r--){
  console.log(ingredients[r]);
}