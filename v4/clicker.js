class Cat {
    constructor(name,src,num) {
        this.name = name;
        this.src = src;
        this.num = num;
        this.clicks = 0;
    }
    click = function() {
        this.clicks += 1;
        return 1;
    }
};

$(function() {
    var model = {
        init: function(numCats) {
            this.cats = [];
            this.numCats = numCats;
            this.currentCat = 0;
            for (var i=0; i<numCats; i++){
                this.cats.push(new Cat('cat'+i,i+'.jpg',i));
            }
        },
        clickCat: function() {
            cats[this.currentCat].click();
        },
        getCatInfo: function(i) {
            var catData = this.cats[i];
            return catData;
        }
    };

    var octopus = {
        init: function() {
            this.totalCats = 6;
            model.init(this.totalCats);
            view1.init();
            view2.init();
            view3.init();
        },
        getCatIInfo: function(i) {
            var catInfo = model.getCatInfo(i);
            return catInfo;
        },
        getCurrentCatInfo: function() {
            var currentCatInfo = model.getCatInfo(model.currentCat);
            return currentCatInfo;
        },
        updateCurrentCat: function(i) {
            model.currentCat = i;
            view2.render();
            view3.render();
        },
        clickCat: function() {
            model.cats[model.currentCat].click();
            view2.render();
        },
        saveCurrentCatInfo: function() {
            var newCatName = $('#admin-name').val();
            var newCatSrc = $('#admin-src').val();
            var newCatClicks = $('#admin-clicks').val();
            
            model.cats[model.currentCat].name = newCatName;
            model.cats[model.currentCat].src = newCatSrc;
            model.cats[model.currentCat].clicks = parseInt(newCatClicks);
            view2.render();
        }
    };

    var view1 = {
        init: function() {
            this.catList = $('#cats');
            view1.render();
        },
        render: function() {
            for (var i=0; i<octopus.totalCats; i++) {
                var btn = document.createElement("button");
                var catIInfo = octopus.getCatIInfo(i);
                btn.innerHTML = catIInfo.name;
                btn.addEventListener('click', (function(numCopy) {
                    return function() {
                        octopus.updateCurrentCat(numCopy);
                };
            })(i));
                this.catList.append(btn);
            }
        }
    };

    var view2 = {
        init: function() {
            $('#cat-img').click(function() {
                octopus.clickCat();
            });
            view2.render();
        },
        render: function() {
            var currentCatInfo = octopus.getCurrentCatInfo();
            $('#cat-name').html(currentCatInfo.name);
            $('#cat-img').attr("src", currentCatInfo.src);
            $('#cat-clicks').html(currentCatInfo.clicks);
        }
    };

    var view3 = {
        init: function() {
            $('#admin-area').hide();
            $('#admin-button').click(function() {
                $('#admin-area').show();
            });
            $('#admin-save').click(function(){
                octopus.saveCurrentCatInfo();
            });
            view3.render();
        },
        render: function() {
            var currentCatInfo = octopus.getCurrentCatInfo();
            $('#admin-name').val(currentCatInfo.name);
            $('#admin-src').val(currentCatInfo.src);
            $('#admin-clicks').val(currentCatInfo.clicks);
        }
    };

    octopus.init();
});