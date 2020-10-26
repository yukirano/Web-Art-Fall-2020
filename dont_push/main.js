$(document).ready(function(){

  $('#push__box').on('click', function(){

   
    setTimeout(function(){
      $('#time__box').text("I said don't push");
    }, 3000)
  })

  setTimeout(function(){
    $('#good__box').text("Good Job");
  }, 15000)


})

