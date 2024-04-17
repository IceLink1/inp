let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let y1 = document.querySelector(".y1")
let y2 = document.querySelector(".y2")

inp2.addEventListener('click', () => {

    y1.classList.add("anima1")
    y1.classList.add("jojo")
    if (inp1.value == "") {
        y2.classList.remove("anima2")
        y2.classList.remove("jojo")
    }
})
y1.addEventListener('click', () => {
    y1.classList.add("anima1")
    y1.classList.add("jojo")
    if (inp1.value == "") {
        y2.classList.remove("anima2")
        y2.classList.remove("jojo")
    }
   
})
inp1.addEventListener('click', () => {
    y2.classList.add("anima2")
    if (inp2.value == "") {
        y1.classList.remove("anima1")
        y1.classList.remove("jojo")
    }
    y2.classList.add("jojo")
   
})
y2.addEventListener('click', () => {
    y2.classList.add("anima2")
    if (inp2.value == "") {
        y1.classList.remove("anima1")
        y1.classList.remove("jojo")
    }
    y2.classList.add("jojo")
  
})