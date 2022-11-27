document.addEventListener("DOMContentLoaded", function(){
    let url1 = "../css/style.css"
    let url2 = "../css/contrast.css"
    let contraston = document.getElementById("with-contrast")
    let contrastoff = document.getElementById("without-contrast")

    function createTag(url){
        let style = document.createElement("link")

        style.href = url
        style.rel = "stylesheet"
        style.type = "text/css"
        style.className = "acess"

        document.body.appendChild(style)
    }

    let tag = document.getElementsByClassName("acess")

    contraston.onclick = function(){
        tag[0].href = url2
        localStorage.setItem("css", url2)
    }

    contrastoff.onclick = function(){
        tag[0].href = url1
        localStorage.setItem("css", url1)
    }

    let css = localStorage.getItem("css")

    if(!css){
        createTag(url1)
    }else{
        createTag(css)
    }
})