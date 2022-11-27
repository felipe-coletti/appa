$(document).ready(function(){
    let titleSize = 20
    let textSize = 16

    $('#increase').click(function(){
        if(titleSize < 28){
            $('#text h1').css({'font-size': ++titleSize + 'px'})
        }
        if(textSize < 24){
            $('body').css({'font-size': ++textSize + 'px'})
        }
    })
    
    $('#decrease').click(function(){
        if(titleSize > 12){
            $('#text h1').css({'font-size': --titleSize + 'px'})
        }
        if(textSize > 8){
            $('body').css({'font-size': --textSize + 'px'})
        }
    })
})