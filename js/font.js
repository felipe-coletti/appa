$(document).ready(function(){
    let titleSize = 20
    let textSize = 16

    $("#increase").click(function(){
        if(titleSize < 24){
            $("#text h1").css({"font-size": ++titleSize + "px"})
        }
        if(textSize < 20){
            $("body").css({"font-size": ++textSize + "px"})
        }
    })
    
    $("#decrease").click(function(){
        if(titleSize > 16){
            $("#text h1").css({"font-size": --titleSize + "px"})
        }
        if(textSize > 12){
            $("body").css({"font-size": --textSize + "px"})
        }
    })
})
