var unicorns = [
  {
    name: 'Amalthea',
    age: 'as the sun',
    powers: [
      'healing',
      'magic',
      'singing'
    ],
    colors: {
      body: 'white',
      hair: 'white',
      eyes: 'translucent'
    },
    last: true
  },
  {
    name: 'Dan',
    age: '2838',
    powers: [
      'flying',
      'smelling good'
    ],
    colors: {
      body: 'brown',
      hair: 'black',
      eyes: 'black'
    },
    last: false
  },
  {
    name: 'Morgan',
    age: '27',
    powers: [
      'water breathing',
      'mist',
      'moon'
    ],
    colors: {
      body: 'pearlescent',
      hair: 'misty petina',
      eyes: 'like the moon'
    },
    last: false
  }
];


console.log(unicorns);

/*
unicorn = [
  { name: '', bodyColor: ''}
]
*/

var simplifiedUnicorns = unicorns.map(function(unicorn, item, array){
  return {
    name: unicorn.name,
    bodyColor: unicorn.colors.body
  };
});

console.log(simplifiedUnicorns);


// count number of specific body color
var bodyColorCount = unicorns.filter(function(unicorn, i, array) {
  return unicorn.colors.body === 'white';
}).length;

console.log(bodyColorCount);

function countBodyColor(colorTest)
{
  return unicorns.filter(function(unicorn, i, array){
    return unicorn.colors.body === colorTest;
  }).length;
}

console.log(countBodyColor('brown'));
