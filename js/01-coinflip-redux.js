// // The “Coin Flip” Game Redux

let coinFlip = ''
let flip = prompt("How many times would you like to flip the coin? ")

for (let i = 0 ; i < flip; i++) {
coinFlip = Math.round(Math.random())

if (coinFlip === 0) {
document.write("Heads")
} else  {
document.write("Tails")
}
}
