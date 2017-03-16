var body = document.querySelector('body');

var rectangle = {
  width: String(getRandomInt(2, 8)) + 'rem',
  height:  String(getRandomInt(2, 8)) + 'rem',
  color: '#6b5ecc',
  background: 'rgba(245,33,160,.5)',
  display: 'inline-block',
  margin: '.5rem',
  padding: '1rem',
  border: '.1rem solid rgba(245,33,230,.89)'
};

console.log(rectangle);

/*function setStyle ( target, reference ) {
  for(var property in reference) {
    target.style[property] = reference[property];
  }
}*/

function getRandomInt(min, max) {
  min = Math.ceil(min); //makes an in
  max = Math.floor(max); //makes an int
  //get the range of max-min and mutlply it by the random 0-1 floating point.
  //add one to be inclusive of the maximum value. (Floor will keep it as int and
  //trim it downwards. add one to this range to basically add another higher
  //value of 1 above the max rage. becaues Math.random() is exclusive to 1,
  //the max+1 value will never be reached and will always be trimmed down
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRect(parent) {
  var newRect = document.createElement('div');
  var newText = document.createTextNode('test');
  newRect.appendChild(newText);
  body.appendChild(newRect);

  //setStyle(newRect, rectangle);
  for(var property in rectangle) {
    newRect.style[property] = rectangle[property];
  }

  console.log(newRect);
}






for (var i = 0; i < 10; i++) {
  createRect();
}
