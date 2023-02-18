const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const Button = document.querySelector(".Button-el")
const color = document.querySelector(".Color-el")

Button.addEventListener('click', function(){
    let Hexcolor = '#'
    for (let i = 0; i < 6; i++){
        Hexcolor += hex[GetRandomNumber()]
    }
    document.body.style.backgroundColor = Hexcolor
    color.textContent = Hexcolor
})
function GetRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
