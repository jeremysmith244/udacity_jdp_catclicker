function Cat(name,id) {
    this.name = name;
    this.clicks = 0;
    this.id = id;
    nameLab = "name" + id;
  };

Cat.prototype.click = function() {
    this.clicks += 1;
    var idLab = "counter" + this.id;
    document.getElementById(idLab).innerHTML = this.clicks;
    nameLab = "name" + this.id;
    document.getElementById(nameLab).innerHTML = this.name;
};

let cat1 = new Cat('kitty',1);
let cat2 = new Cat('stupid lamo',2);