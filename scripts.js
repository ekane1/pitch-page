// My Scripts
// images
var img0 = 'https://scontent.xx.fbcdn.net/v/t1.0-9/35695_139151539430203_1269016_n.jpg?oh=ca8d8e622355592b197e974ed02da75e&oe=57E681E2';
var img1 = 'https://scontent.xx.fbcdn.net/v/t1.0-9/34708_139154186096605_48453_n.jpg?oh=9746a80bb6c1622a539fc301032574aa&oe=579F1868';
var img2 = 'https://scontent.xx.fbcdn.net/v/t1.0-9/34708_139154192763271_2036714_n.jpg?oh=05522e7b0f39d2fa88e409972298be59&oe=579F24B2';
var img3 = 'https://scontent.xx.fbcdn.net/v/t1.0-9/34731_139161746095849_5352204_n.jpg?oh=4556af87c2d304c4904e128370618478&oe=57A402CA';
var img4 = 'https://scontent.xx.fbcdn.net/v/t1.0-9/34730_139156799429677_3082264_n.jpg?oh=4e1c25407af18c918c0a827c9ab31013&oe=57E22A12';
var img5 = 'https://scontent.xx.fbcdn.net/v/t1.0-9/430550_352750101403678_672746868_n.jpg?oh=f5fae22433c7e395982d2a6de0e95eea&oe=57A0A851';

//get random number
var randNum = Math.floor((Math.random() * 5));
console.log(randNum);

//put image on page
$('img').attr('src', eval('img' + randNum));

$ npm install readmore-js
$('article').readmore({
  speed: 75,
  lessLink: '<a href="#">Read less</a>'
});
