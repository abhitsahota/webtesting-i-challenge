module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
// a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.

// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.

  if (item.enhancement < 20) {
    item.enhancement += 1
  } 

  return { ...item };
}

function fail(item) {
// a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  if (item.enhancement < 15) {
    if (item.durability > 5) {
      item.durability -= 5
    } else {
      item.durability = 0
    }
  } else {
    if (item.durability > 10) {
      item.durability -= 10
    } else {
      item.durability = 0
    }
  } 

  if (item.enhancement > 16) {
    item.enhancement -= 1
  } 

  return { ...item };
}

function repair(item) {
// a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.

  item.durability = 100

  return { ...item };
}


// Stretch

function get(item) {
  return { ...item };
}
