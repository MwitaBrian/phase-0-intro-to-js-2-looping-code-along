function writeCards(names, eventName) {
  let newArray = [];
  for(let i = 0; i < names.length ; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return newArray;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}

