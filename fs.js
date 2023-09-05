
let divs = document.querySelectorAll("div")

divs.forEach((x)=>{
    x.addEventListener("mouseover",()=>{
        x.style.background = x.innerText
    })

    x.addEventListener("mouseout",()=>{
        x.style.background = "white"
    })

})