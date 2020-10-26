$(document).on('wheel', function(){
    //console.log("scrolling happened");

    let coolBox = `<div class="cool-box"></div>`;

    let amountScrolled = $(document).scrollTop()

    console.log("scroll: " + amountScrolled);

    if(amountScrolled > 1000){
        $('body').css('background', 'pink');
        let p = `<p class="some-text">""""some text""""</p>`;

        $('body').append(p);
        $('.some-text').css('top', `${amoundScrolled}px`)


        }

    $('body').append(coolBox);

})
