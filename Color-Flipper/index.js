const Button = document.querySelector(".button-3")
const Color = document.querySelector(".color")
const BackgroundColors = ["Red", "Gray", "Green", "Yellow", "Blue", "rgba(133,122,200)", "#f15025"]



Button.addEventListener('click', function(){
    let Randomcolor = RandomNumber();
    document.body.style.backgroundColor = BackgroundColors[Randomcolor]
    Color.textContent = BackgroundColors[Randomcolor]

})

function RandomNumber(){
    return Math.floor(Math.random() * BackgroundColors.length)
}
