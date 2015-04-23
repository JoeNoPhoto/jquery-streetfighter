'use strict';

// Our resource...
function Fighter(fighterSelector) {
  this.$hadouken = document.querySelector('.hadouken');
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
  if (!this.isReady()) {
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
    hide(this.$fighterCool, this.$fighterReady, this.$fighterThrowing);
    show(this.$fighterStill);
  }
};

Fighter.prototype.getGansta = function() {
  // TODO ...
};

Fighter.prototype.throwHadouken = function() {
  // TODO ...
};

// Our app
var ryu = new Fighter('.ryu');

ryu.$fighter.addEventListener('mouseenter', function() {
  ryu.getReady();
});
ryu.$fighter.addEventListener('mouseleave', function() {
  ryu.standStill();
});

ryu.$fighter.addEventListener('', function(){

});
ryu.$fighter.addEventListener('', function(){

});
ryu.$fighter.addEventListener('', function(){

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

// $(document).ready(function() {
//   $('.ryu')
//   .mousedown(function() {
//     playHadouken();
//     $('.ryu-ready, .ryu-cool, .ryu-still').hide();
//     $('.ryu-throwing').show();
//     $('.hadouken').finish().show()
//     .animate(
//       {'left': '1020px'},
//       500,
//       function() {
//         $(this).hide();
//         $(this).css('left', '450px');
//       }
//     );
//   })
//   .mouseup(function() {
//     $('.ryu-throwing, .ryu-cool, .ryu-still').hide();
//     $('.ryu-ready').show();
//   });

//   $(document).keydown(function(event){
//     if(event.keyCode == 88){
//       $('.ryu-still, .ryu-ready, .ryu-throwing').hide();
//       $('.ryu-cool').show();
//     }
//   }).keyup(function(event){
//       if (event.keyCode == 88);
//         $('.ryu-cool, .ryu-ready, .ryu-throwing').hide();
//         $('.ryu-still').show();
//     });
// });

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
