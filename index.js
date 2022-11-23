function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else return 42 - block;
}
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}
function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    let price = 0;
    return price;
  } else if (distance > 400 && distance <= 2000) {
    let price = (distance - 400) * 0.02;
    return price;
  } else if (distance > 2000 && distance <= 2500) {
    let price = 25;
    return price;
  } else {
    return "cannot travel that far";
  }
}
