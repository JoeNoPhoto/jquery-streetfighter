$(document).ready(function() {
  $('.ryu').mouseenter(function(){
    $('.ryu-still, .ryu-cool, .ryu-throwing').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function(){
    $('.ryu-ready, .ryu-cool, .ryu-throwing').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready, .ryu-cool, .ryu-still').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '600px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing, .ryu-cool, .ryu-still').hide();
    $('.ryu-ready').show();
  });

  $(document).keydown(function(event){
    if(event.keyCode == 88){
      $('.ryu-still, .ryu-ready, .ryu-throwing').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(event){
      if (event.keyCode == 88);
        $('.ryu-cool, .ryu-ready, .ryu-throwing').hide();
        $('.ryu-still').show();
    });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}