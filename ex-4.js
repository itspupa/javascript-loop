// Exercise #4: Displaying Restaurant Name
const restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
const newRestaurants = [];
for (let i = 0;i < restaurants.length;i++){
    newRestaurants.push( `Restaurant Name:${restaurants[i]}`)
};

console.log(newRestaurants);
