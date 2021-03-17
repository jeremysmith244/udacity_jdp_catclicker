// Let's loop over the numbers in our array
// function makeCat(name,id,src) {
//   var clicks = 0;
//   let newDiv = document.createElement("div");
//   newDiv.id = 'cat' + id;
//   newName = document.createTextNode("My name is " + name);
//   newName.id = 'name' + id;
//   newImg = new Image(600,400);
//   newImg.id = 'img' + id;
//   newImg.src = src;
//   newCaption = document.createTextNode("I've been cuddled " + clicks + " times!");
//   newCaption.id = 'cap' + id;
//   newDiv.append(newName);
//   newDiv.append(newImg);
//   newDiv.append(newCaption);
//   document.body.append(newDiv);
// };

// makeCat('kitty',1,'kitty.jpeg')

// function Cat(name,id,src) {

//     this.name = name;
//     this.clicks = 0;
//     this.id = id;
//     this.src = src;

//     this.divLab = "cat" + this.id;
//     this.nameLab = "name" + this.id;
//     this.imgLab = "img" + this.id;
//     this.capLab = "cap" + id;

//     const newDiv = document.createElement("div");
//     newDiv.id = this.divLab;

//     const newName = document.createElement("p");
//     newName.innerHTML = "My name is " + this.name;
//     newName.id = this.nameLab;

//     const newImg = new Image(600,400);
//     newImg.id = this.imgLab;
//     newImg.src = this.src;
//     newImg.addEventListener('click', function() {this.clicks += 1;})

//     const newCaption = document.createElement("p");
//     newCaption.innerHTML = "I've been cuddled " + this.clicks + " times!";
//     newCaption.id = this.capLab;

//     newDiv.append(newName);
//     newDiv.append(newImg);
//     newDiv.append(newCaption);
//     document.body.append(newDiv);

//   };

// let cat1 = new Cat('kitty',1,'kitty.jpeg');
// let cat2 = new Cat('stupid lamo',2,'stupidlamo.jpg');

function Cat(name,id,src) {
  this.name = name;
  this.clicks = 0;
  this.id = id;
  nameLab = "name" + id;
  this.src = src;
};

Cat.prototype.click = function() {
  this.clicks += 1;
  var idLab = "counter" + this.id;
  document.getElementById(idLab).innerHTML = this.clicks;
  document.getElementById('large-counter').innerHTML = this.clicks;
  document.getElementById('large-name').innerHTML = this.name;
  document.getElementById('large-image').src = this.src;
};

let cat1 = new Cat('kitty',1,'kitty.jpeg');
let cat2 = new Cat('stupid lamo1',2,'stupidlamo.jpg');
let cat3 = new Cat('stupid lamo2',3,'stupidlamo.jpg');
let cat4 = new Cat('stupid lamo3',4,'stupidlamo.jpg');
let cat5 = new Cat('stupid lamo4',5,'stupidlamo.jpg');