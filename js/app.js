'use strict';
/*jslint browser: true */
var STATE = {
	STILL: 'STILL',
	COOL: 'COOL',
	READY: 'READY',
	THROW: 'THROW'
};

var LOCKED = {
	YES: 'YES',
	NO: 'NO',
};

// Our resource...
function Fighter(fighterSelector) {
	this.$fighter = document.querySelector(fighterSelector);
	this.$hadouken = this.$fighter.querySelector('.hadouken');
	this.$fighterCool = this.$fighter.querySelector('.fighter-cool');
	this.$fighterReady = this.$fighter.querySelector('.fighter-ready');
	this.$fighterStill = this.$fighter.querySelector('.fighter-still');
	this.$fighterThrowing = this.$fighter.querySelector('.fighter-throwing');
	this.state = STATE.STILL;
}

Fighter.prototype.isStill = function() {
  return this.state === STATE.STILL;
};
Fighter.prototype.isReady = function() {
  return this.state === STATE.READY;
};
Fighter.prototype.isCool = function() {
  return this.state === STATE.COOL;
};
Fighter.prototype.isThrowing = function() {
  return this.state === STATE.THROW;
};

Fighter.prototype.getStill = function() {
	if(!this.isStill()) {
    this.state = STATE.STILL;
      hide(this.$fighterReady, this.$fighterThrowing, this.$fighterCool);
      show(this.$fighterStill);
  console.log(this.state);
  }
};

Fighter.prototype.getReady = function() {
	if(!this.isReady()) {
    this.state = STATE.READY;
	  hide(this.$fighterStill, this.$fighterThrowing, this.$fighterCool);
    show(this.$fighterReady);
	}
  console.log(this.state);
};

Fighter.prototype.getCool = function() {
  if(!this.isCool()) {
    this.oldState = this.state;
    this.state = STATE.COOL;
    hide(this.$fighterReady, this.$fighterThrowing, this.$fighterStill);
    show(this.$fighterCool);
  }
  console.log(this.state);
};

Fighter.prototype.gotCool = function() {
  if(this.oldState === 'READY'){
    this.getReady();
  } else {
    this.getStill();
  }
  console.log(this.state);
};

Fighter.prototype.getFire = function() {
  if(!this.isThrowing()) {
    this.state = STATE.THROW;
    this.useSuperpowers();
  }
  console.log(this.state);
};

Fighter.prototype.useSuperpowers = function() {
  var fire = function(){
		fireBall.style.left = currentPos + 'px';
		currentPos += 30;
		if(currentPos < 1020) {
			fireBall.style.display = 'block';
			requestAnimationFrame(fire);
		} else {
				fireBall.style.display = 'none';
				fireBall.style.left = '500px';
				currentPos = 500;
		}
		cancelAnimationFrame(fire);
	};
	// do {
		hide(this.$fighterReady, this.$fighterStill, this.$fighterCool);
		show(this.$fighterThrowing);
	// } while(this.$hadouken.display.left < '1020px');

  fireHadouken();
  fire();
};

// Some helpers...
var currentPos = 500;
function fireHadouken() {
/*	$('#hadouken-sound')[0].volume = 0.2;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();*/
}
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
// Our app
var ryu = new Fighter('.ryu');
var fireBall = ryu.$hadouken;
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

addEventListener(ryu.$fighter, 'mouseenter', function() {
	ryu.getReady();
});
addEventListener(ryu.$fighter, 'mouseleave', function() {
	ryu.getStill();
});
addEventListener(ryu.$fighter, 'click', function(){
	ryu.getFire();
});
addEventListener(document, 'keydown', function(e) {
	if (e.keyCode == 88)
		ryu.getCool();
});
addEventListener(document, 'keyup', function(e) {
	if (e.keyCode == 88)
		ryu.gotCool();
});