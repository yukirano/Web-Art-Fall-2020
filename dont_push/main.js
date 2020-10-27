$(document).ready(function(){

  $('#push__box').on('click', function(){

   
    setTimeout(function(){
      $('#time__box').text("I said don't push");
    }, 3000)
  })

  setTimeout(function(){
    $('#good__box').text("Keep waiting");
  }, 5000)

  setTimeout(function(){
    $('#good__box').text("Any time now");
  }, 15000)


  setTimeout(function(){
    $('#good__box').text("Good Job");
  }, 30000)


})

