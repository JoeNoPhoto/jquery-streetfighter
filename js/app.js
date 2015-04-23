'use strict';

// Our resource...
function Fighter(ryuSelector) {
  this.$hadouken = document.querySelector('.hadouken');
  this.$ryu = document.querySelector(ryuSelector);
  this.$ryuCool = this.$ryu.querySelector('.ryu-cool');
  this.$ryuReady = this.$ryu.querySelector('.ryu-ready');
  this.$ryuStill = this.$ryu.querySelector('.ryu-still');
  this.$ryuThrowing = this.$ryu.querySelector('.ryu-throwing');
  this.state = 'still';
}

// Its API
Fighter.prototype.isReady = function() {
  return this.state === 'ready';
};
Fighter.prototype.getReady = function() {
  if (!this.isReady()) {
    this.state = 'ready';
    hide(this.$ryuCool, this.$ryuStill, this.$ryuThrowing);
    show(this.$ryuReady);
  }
};

Fighter.prototype.isStill = function() {
  return this.state === 'still';
};
Fighter.prototype.standStill = function() {
  if (!this.isStill()) {
    this.state = 'still';
    hide(this.$ryuCool, this.$ryuReady, this.$ryuThrowing);
    show(this.$ryuStill);
  }
};

Fighter.prototype.getGansta = function() {

    hide(this.$ryuStill, this.$ryuReady, this.ryuThrowing);
    show(this.$ryuCool);
};



Fighter.prototype.throwHadouken = function() {
    // TODO ...
    // change to throwing image
    hide(this.$ryuStill, this.$ryuReady, this.$ryuCool);
    show(this.ryuThrowing);
    //animate hadouken and play Hadouken sound

    //return to standstill

};

// Our app
var ryu = new Fighter('.ryu');

ryu.$ryu.addEventListener('mouseenter', function() {
  ryu.getReady();
});
ryu.$ryu.addEventListener('mouseleave', function() {
  ryu.standStill();
});

ryu.$ryu.addEventListener('', function(){

});
ryu.$ryu.addEventListener('', function(){

});
ryu.$ryu.addEventListener('', function(){

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
