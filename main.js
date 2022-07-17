setInterval(()=>{
    let hour = new Date()
    let clock = document.querySelector(".clock")
    let dayAtual = document.querySelector(".title")

    dayAtual.innerText = hour.toLocaleDateString()
    clock.innerText = hour.toLocaleTimeString("pt-br")
})