$(document).ready(function(){
    let textSize = 16
    $('#increase').click(function(){
        if(textSize < 24){
            $('body').css({'font-size': ++textSize + 'px'})
        }
    })
    $('#decrease').click(function(){
        if(textSize > 8){
            $('body').css({'font-size': --textSize + 'px'})
        }
    })
    let titleSize = 20
    $('#increase').click(function(){
        if(titleSize < 28){
            $('#text h1').css({'font-size': ++titleSize + 'px'})
        }
    })
    $('#decrease').click(function(){
        if(titleSize > 12){
            $('#text h1').css({'font-size': --titleSize + 'px'})
        }
    })
})