'use strict';
/*jslint browser: true */
// Our resource...
function Fighter(fighterSelector) {
  this.$hadouken = document.querySelector('#hadouken');
  this.$fighter = document.querySelector(fighterSelector);
  this.$fighterCool = this.$fighter.querySelector('.fighter-cool');
  this.$fighterReady = this.$fighter.querySelector('.fighter-ready');
  this.$fighterStill = this.$fighter.querySelector('.fighter-still');
  this.$fighterThrowing = this.$fighter.querySelector('.fighter-throwing');
  this.state = 'still';
}

// Its API
Fighter.prototype.isReady = function() {
  return this.state === 'ready';
};
Fighter.prototype.getReady = function() {
	if (this.$fighterCool.classList.contains('down'))
		ryu.beCool();
	else if(this.$fighterThrowing.classList.contains('down'))
		ryu.throwHadouken();
  else if (!this.isReady()) {
    this.state = 'ready';
    hide(this.$fighterCool, this.$fighterStill, this.$fighterThrowing);
    show(this.$fighterReady);
  }
};

Fighter.prototype.isStill = function() {
  return this.state === 'still';
};
Fighter.prototype.standStill = function() {
  if (!this.isStill()) {
    this.state = 'still';
    hide(this.$fighterReady, this.$fighterCool, this.$fighterThrowing);
    show(this.$fighterStill);
  }
};

Fighter.prototype.beCool = function() {
    this.$fighterCool.classList.add('down');
    if ((this.state === 'ready')){
    hide(this.$fighterReady);
  } else {
    hide(this.$fighterStill);
    }
    show(this.$fighterCool);
};
Fighter.prototype.wasCool = function() {
  this.$fighterCool.classList.remove('down');
  hide(this.$fighterCool);
  if (this.state === 'ready')
    show(this.$fighterReady);
  else
  	show(this.$fighterStill);
};

Fighter.prototype.throwHadouken = function() {
	hide(this.$fighterReady, this.$fighterCool, this.$fighterStill);
	show(this.$fighterThrowing);
};
Fighter.prototype.threwHadouken = function() {
  hide(this.$fighterThrowing);
  show(this.$fighterReady);
};
Fighter.prototype.fireBall = function () {
	show(this.$hadouken);
	fireHadouken();
};
Fighter.prototype.ballFired = function(){
 	hide(this.$hadouken);
 };
// Our app
var ryu = new Fighter('.ryu');
var addEventListener = (function(){
	if(document.addEventListener)
		return function (element, event, handler) {
			element.addEventListener(event, handler, false);
		};
	else
		return function (element, event, handler) {
			element.attachEvemt('on' + event, handler);
		};
}());
addEventListener(ryu.$fighter, 'mouseenter', function() {  ryu.getReady();
});
addEventListener(ryu.$fighter, 'mouseleave', function() {
  ryu.standStill();
});

addEventListener(ryu.$fighter, 'mouseup', function(){
	ryu.throwHadouken();
	ryu.fireBall();

	setTimeout(function(){
		ryu.throwHadouken();
		}, 500);
	setTimeout(function(){
		ryu.threwHadouken();
		ryu.ballFired();}, 500);
});


addEventListener(document, 'keydown', function(e) {
  if (e.keyCode == 88)ryu.beCool();
});
addEventListener(document, 'keyup', function(e) {
  if (e.keyCode == 88)
    ryu.wasCool();
});

// Some helpers...
function hide() {
  Array.prototype.forEach.call(arguments, function(el) {
    el.style.display = 'none';
  });
}
function show() {
  Array.prototype.forEach.call(arguments, function(el) {
    el.style.display = 'block';
  });
}
function fireHadouken () {
  $('#hadouken-sound')[0].volume = 0.2;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}