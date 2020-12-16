$(function() {
  $('.self').hover(
    function() {
      $('.text-1').fadeIn();
    },
    function() {
      $('.text-1').fadeOut();
    }
  );
  $('.text-1').hide();
  $('.edw').hover(
    function() {
      $('.text-2').fadeIn();
    },
    function() {
      $('.text-2').fadeOut();
    }
  );
  $('.text-2').hide();
  $('.qulification').hover(
    function() {
      $('.text-3').fadeIn();
    },
    function() {
      $('.text-3').fadeOut();
    }
  );
  $('.text-3').hide();
  $('.award').hover(
    function() {
      $('.text-4').fadeIn();
    },
    function() {
      $('.text-4').fadeOut();
    }
  );
  $('.text-4').hide();
  $('#submit').click(function() {
    $('.construction').fadeIn();
  });
  $('#submit').click(function() {
    $('.modal').fadeIn();
  });
  $('.close-modal').click(function() {
    $('.modal').fadeOut();
  });
});
