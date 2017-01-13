$(function(){

  var colorArray = ['red', 'green', 'yellow', 'blue'];

  for (var i = 0; i < colorArray.length; i++) {//Adds different color blocks - number of blocks equal to colors.
    var $colorBlock = ('<div class="colorBlock"></div>');
    var $color = $($colorBlock).css('background-color', colorArray[i]);
    $($color).attr('id', colorArray[i]).appendTo('#blockSection');//Appends block to DOM, and gives it id equal to its color.
  };

  var randomColor = colorArray[randomNumber(0, colorArray.length - 1)];//Sets a variable to one of the random colors.
  alert('Pick the ' + randomColor + ' block.');//Alerts the user to pick a box

  $('#'+randomColor+'').click(function(){//When correct box is clicked, user is alerted of their success.
    $(this).css('background-color', 'pink');
    setTimeout(function(){location.reload()}, 2000);
    alert("Correct!");
  });

  $(".colorBlock:not(#"+randomColor+")").click(function(){//When the wrong box is clicked, user is alerted of failure.
    alert("Wrong! Guess again");
  });

});

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};
