// // The “Coin Flip Streak” Game

let coinFlip = ''

do{
coinFlip = Math.round(Math.random())
if (coinFlip === 0) {
document.write("Heads") 
} else {
document.write("Tails") 
}
} while (coinFlip === 0)
