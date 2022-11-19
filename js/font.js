$(document).ready(function(){
    let size = 18
    $('#increase').click(function(){
        if(size < 26){
            $('body').css({'font-size': ++size + 'px'})
        }
    })
    $('#decrease').click(function(){
        if(size > 10){
            $('body').css({'font-size': --size + 'px'})
        }
    })
})